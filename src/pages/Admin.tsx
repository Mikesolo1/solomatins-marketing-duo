
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useBlog, BlogPost } from '@/hooks/useBlog';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Admin = () => {
  const { user, signOut } = useAuth();
  const { posts, loading, fetchPosts, deletePost } = useBlog();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);

  useEffect(() => {
    const checkAdminRole = async () => {
      if (!user) {
        navigate('/auth');
        return;
      }

      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();

        if (error) throw error;
        
        if (data?.role === 'admin') {
          setIsAdmin(true);
          fetchPosts(false); // Получаем все посты, включая неопубликованные
        } else {
          toast.error('У вас нет прав администратора');
          navigate('/');
        }
      } catch (error) {
        console.error('Error checking admin role:', error);
        toast.error('Ошибка проверки прав доступа');
        navigate('/');
      } finally {
        setCheckingAdmin(false);
      }
    };

    checkAdminRole();
  }, [user, navigate, fetchPosts]);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error('Ошибка выхода');
    } else {
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

  if (checkingAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Проверка прав доступа...</p>
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

        {loading ? (
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
