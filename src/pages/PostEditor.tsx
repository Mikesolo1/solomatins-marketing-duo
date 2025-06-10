import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Save, Eye, Upload } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useBlog } from '@/hooks/useBlog';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import RichTextEditor from '@/components/RichTextEditor';
import HtmlTemplates from '@/components/HtmlTemplates';

const PostEditor = () => {
  const { user, loading: authLoading } = useAuth();
  const { createPost, updatePost, uploadImage } = useBlog();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);
  const [adminCheckCompleted, setAdminCheckCompleted] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image: '',
    published: false,
    meta_title: '',
    meta_description: '',
    meta_keywords: ''
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const checkAdminRole = useCallback(async () => {
    if (authLoading || adminCheckCompleted) {
      console.log('Skipping admin check - authLoading:', authLoading, 'adminCheckCompleted:', adminCheckCompleted);
      return;
    }

    if (!user) {
      console.log('No user found, redirecting to auth');
      navigate('/auth');
      return;
    }

    console.log('Checking admin role for user:', user.id);
    setCheckingAdmin(true);

    try {
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role, full_name, email')
        .eq('id', user.id)
        .single();

      console.log('Profile query result:', profile, profileError);

      if (profileError) {
        if (profileError.code === 'PGRST116') {
          console.log('Profile not found, creating...');
          const { data: newProfile, error: createError } = await supabase
            .from('profiles')
            .insert({
              id: user.id,
              email: user.email || '',
              full_name: user.user_metadata?.full_name || '',
              role: 'user'
            })
            .select()
            .single();

          if (createError) {
            console.error('Error creating profile:', createError);
            toast.error('Ошибка создания профиля: ' + createError.message);
            navigate('/');
            return;
          }

          console.log('Profile created:', newProfile);
          
          if (newProfile.role !== 'admin') {
            toast.error('У вас нет прав администратора');
            navigate('/');
            return;
          }
        } else {
          console.error('Error fetching profile:', profileError);
          toast.error('Ошибка проверки прав доступа: ' + profileError.message);
          navigate('/');
          return;
        }
      }
      
      if (profile?.role === 'admin') {
        console.log('User is admin, setting access');
        setIsAdmin(true);
      } else {
        console.log('User is not admin, role:', profile?.role);
        toast.error('У вас нет прав администратора. Текущая роль: ' + (profile?.role || 'не определена'));
        navigate('/');
      }
    } catch (error) {
      console.error('Error in checkAdminRole:', error);
      toast.error('Ошибка проверки прав доступа');
      navigate('/');
    } finally {
      setCheckingAdmin(false);
      setAdminCheckCompleted(true);
    }
  }, [user, authLoading, navigate, adminCheckCompleted]);

  useEffect(() => {
    console.log('PostEditor useEffect - user:', user?.email, 'authLoading:', authLoading, 'adminCheckCompleted:', adminCheckCompleted);
    checkAdminRole();
  }, [checkAdminRole]);

  useEffect(() => {
    if (isEdit && id && isAdmin && !loading) {
      loadPost();
    }
  }, [isEdit, id, isAdmin]);

  const loadPost = async () => {
    if (!id) return;
    
    setLoading(true);
    try {
      const { data: post, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      
      if (post) {
        setFormData({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt || '',
          content: post.content,
          featured_image: post.featured_image || '',
          published: post.published,
          meta_title: post.meta_title || '',
          meta_description: post.meta_description || '',
          meta_keywords: post.meta_keywords || ''
        });
      }
    } catch (error) {
      console.error('Error loading post:', error);
      toast.error('Ошибка загрузки статьи');
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-zа-я0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title)
    }));
  };

  const handleImageUpload = async (file: File) => {
    console.log('Starting image upload:', file.name, file.size);
    setUploading(true);
    try {
      const { url, error } = await uploadImage(file);
      if (error) {
        console.error('Upload error in component:', error);
        throw error;
      }
      
      console.log('Image uploaded successfully, URL:', url);
      if (url) {
        setFormData(prev => ({ ...prev, featured_image: url }));
        toast.success('Изображение загружено успешно');
      } else {
        throw new Error('Не удалось получить URL изображения');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Ошибка загрузки изображения: ' + (error as Error).message);
    } finally {
      setUploading(false);
    }
  };

  const handleInsertTemplate = (html: string) => {
    setFormData(prev => ({
      ...prev,
      content: prev.content + '\n' + html
    }));
  };

  const handleSubmit = async (publish = false) => {
    if (!user) return;

    if (!formData.title || !formData.content) {
      toast.error('Заполните название и содержание статьи');
      return;
    }

    setLoading(true);
    try {
      const postData = {
        ...formData,
        published: publish || formData.published,
        author_id: user.id
      };

      let result;
      if (isEdit && id) {
        result = await updatePost(id, postData);
      } else {
        result = await createPost(postData);
      }

      if (result.error) throw result.error;

      toast.success(isEdit ? 'Статья обновлена' : 'Статья создана');
      navigate('/admin');
    } catch (error) {
      console.error('Error saving post:', error);
      toast.error('Ошибка сохранения статьи');
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || checkingAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">
            {authLoading ? 'Проверка авторизации...' : 'Проверка прав доступа...'}
          </p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  if (loading && isEdit) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Загрузка статьи...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => navigate('/admin')}>
                <ArrowLeft size={16} className="mr-2" />
                Назад
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">
                {isEdit ? 'Редактировать статью' : 'Новая статья'}
              </h1>
              {!formData.published && (
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Черновик
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                onClick={() => handleSubmit(false)}
                disabled={loading}
              >
                <Save size={16} className="mr-2" />
                Сохранить
              </Button>
              <Button 
                onClick={() => handleSubmit(true)}
                disabled={loading}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                <Eye size={16} className="mr-2" />
                Опубликовать
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Основная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Название статьи</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Введите название статьи"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="slug">URL (slug)</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                    placeholder="url-stati"
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    URL статьи: /blog/{formData.slug}
                  </p>
                </div>

                <div>
                  <Label htmlFor="excerpt">Краткое описание</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Краткое описание статьи для превью"
                    className="mt-1"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SEO мета-теги</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="meta-title">Meta Title</Label>
                  <Input
                    id="meta-title"
                    value={formData.meta_title}
                    onChange={(e) => setFormData(prev => ({ ...prev, meta_title: e.target.value }))}
                    placeholder="SEO заголовок для поисковых систем"
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Рекомендуется до 60 символов
                  </p>
                </div>

                <div>
                  <Label htmlFor="meta-description">Meta Description</Label>
                  <Textarea
                    id="meta-description"
                    value={formData.meta_description}
                    onChange={(e) => setFormData(prev => ({ ...prev, meta_description: e.target.value }))}
                    placeholder="Описание статьи для поисковых систем"
                    className="mt-1"
                    rows={3}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Рекомендуется до 160 символов
                  </p>
                </div>

                <div>
                  <Label htmlFor="meta-keywords">Meta Keywords</Label>
                  <Input
                    id="meta-keywords"
                    value={formData.meta_keywords}
                    onChange={(e) => setFormData(prev => ({ ...prev, meta_keywords: e.target.value }))}
                    placeholder="ключевые слова, через запятую"
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Содержание статьи</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Label htmlFor="content-textarea">HTML контент</Label>
                  <Textarea
                    id="content-textarea"
                    value={formData.content}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    placeholder="Введите содержание статьи с HTML разметкой..."
                    className="mt-1 min-h-[400px] font-mono text-sm"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Вы можете использовать HTML теги для форматирования текста
                  </p>
                </div>
                
                <div className="border rounded-lg p-4 bg-gray-50">
                  <h4 className="font-semibold mb-2">Предварительный просмотр:</h4>
                  <div 
                    className="blog-content bg-white p-4 rounded border"
                    dangerouslySetInnerHTML={{ __html: formData.content }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Templates Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <HtmlTemplates onInsertTemplate={handleInsertTemplate} />
          </div>

          {/* Settings Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Публикация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="published">Опубликовать статью</Label>
                  <Switch
                    id="published"
                    checked={formData.published}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, published: checked }))}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Изображение статьи</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {formData.featured_image && (
                  <div className="relative">
                    <img
                      src={formData.featured_image}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
                
                <div>
                  <Label htmlFor="image">Загрузить изображение</Label>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        console.log('File selected:', file.name, file.size);
                        handleImageUpload(file);
                      }
                    }}
                    className="hidden"
                  />
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById('image')?.click()}
                    disabled={uploading}
                    className="w-full mt-1"
                  >
                    <Upload size={16} className="mr-2" />
                    {uploading ? 'Загрузка...' : 'Выбрать файл'}
                  </Button>
                </div>

                <div>
                  <Label htmlFor="image-url">Или укажите URL</Label>
                  <Input
                    id="image-url"
                    value={formData.featured_image}
                    onChange={(e) => setFormData(prev => ({ ...prev, featured_image: e.target.value }))}
                    placeholder="https://..."
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostEditor;
