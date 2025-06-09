
import { useEffect, useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useBlog, BlogPost } from '@/hooks/useBlog';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Admin = () => {
  const { user, signOut, loading: authLoading } = useAuth();
  const { posts, loading: postsLoading, fetchPosts, deletePost } = useBlog();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);
  const [adminCheckCompleted, setAdminCheckCompleted] = useState(false);

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
        // Загружаем посты только один раз при получении доступа
        if (!adminCheckCompleted) {
          fetchPosts(false);
        }
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
  }, [user, authLoading, navigate, fetchPosts, adminCheckCompleted]);

  useEffect(() => {
    console.log('Admin useEffect - user:', user?.email, 'authLoading:', authLoading, 'adminCheckCompleted:', adminCheckCompleted);
    checkAdminRole();
  }, [checkAdminRole]);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error('Ошибка выхода');
    } else {
      // Сбрасываем состояние при выходе
      setIsAdmin(false);
      setAdminCheckCompleted(false);
      navigate('/');
    }
  };

  const handleDeletePost = async (id: string, title: string) => {
    if (window.confirm(`Вы уверены, что хотите удалить статью "${title}"?`)) {
      const { error } = await deletePost(id);
      if (error) {
        toast.error('Ошибка удаления статьи');
      } else {
        toast.success('Статья удалена');
        fetchPosts(false);
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Админка блога</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Привет, {user?.email}!
              </span>
              <Link to="/">
                <Button variant="outline">
                  На сайт
                </Button>
              </Link>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut size={16} className="mr-2" />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Управление статьями</h2>
          <Link to="/admin/post/new">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <Plus size={16} className="mr-2" />
              Новая статья
            </Button>
          </Link>
        </div>

        {postsLoading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Загрузка статей...</p>
          </div>
        ) : posts.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Статей пока нет
              </h3>
              <p className="text-gray-600 mb-4">
                Создайте первую статью для блога
              </p>
              <Link to="/admin/post/new">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  <Plus size={16} className="mr-2" />
                  Создать статью
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {post.title}
                        {!post.published && (
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Черновик
                          </span>
                        )}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        Создано: {formatDate(post.created_at)} | Просмотров: {post.views}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {post.published && (
                        <Link to={`/blog/${post.slug}`}>
                          <Button variant="outline" size="sm">
                            <Eye size={16} />
                          </Button>
                        </Link>
                      )}
                      <Link to={`/admin/post/edit/${post.id}`}>
                        <Button variant="outline" size="sm">
                          <Edit size={16} />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeletePost(post.id, post.title)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                {post.excerpt && (
                  <CardContent>
                    <p className="text-gray-700">{post.excerpt}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
