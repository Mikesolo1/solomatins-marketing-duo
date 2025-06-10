
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useBlog, BlogPost } from '@/hooks/useBlog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const { posts, loading, fetchPosts } = useBlog();

  useEffect(() => {
    fetchPosts(true); // Только опубликованные статьи
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Загрузка статей...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Блог о маркетинге
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Делимся опытом, инсайтами и актуальными трендами в мире интернет-маркетинга
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Пока статей нет
                </h2>
                <p className="text-gray-600">
                  Скоро здесь появятся интересные материалы о маркетинге
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                    {post.featured_image && (
                      <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="flex flex-col flex-grow">
                      <CardHeader className="flex-grow">
                        <h2 className="text-xl font-bold hover:text-orange-500 transition-colors line-clamp-3">
                          <Link to={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h2>
                        {post.excerpt && (
                          <p className="text-gray-600 text-sm line-clamp-3">
                            {truncateText(post.excerpt, 120)}
                          </p>
                        )}
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{formatDate(post.created_at)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye size={14} />
                              <span>{post.views}</span>
                            </div>
                          </div>
                          {post.profiles && (
                            <div className="flex items-center gap-1">
                              <User size={14} />
                              <span className="truncate max-w-[100px]">{post.profiles.full_name}</span>
                            </div>
                          )}
                        </div>
                        <Link to={`/blog/${post.slug}`}>
                          <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                            Читать далее
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
