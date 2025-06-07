
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Eye, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBlog, BlogPost as BlogPostType } from '@/hooks/useBlog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getPostBySlug } = useBlog();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        setLoading(true);
        const postData = await getPostBySlug(slug);
        setPost(postData);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, getPostBySlug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Загрузка статьи...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Статья не найдена</h1>
          <p className="text-gray-600 mb-8">К сожалению, запрашиваемая статья не существует</p>
          <Link to="/blog">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <ArrowLeft className="mr-2" size={16} />
              Вернуться к блогу
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        <article className="container mx-auto px-4 py-8">
          {/* Back button */}
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="mr-2" size={16} />
                Назад к блогу
              </Button>
            </Link>
          </div>

          {/* Featured Image */}
          {post.featured_image && (
            <div className="aspect-video mb-8 overflow-hidden rounded-lg">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{formatDate(post.created_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={18} />
                <span>{post.views} просмотров</span>
              </div>
              {post.profiles && (
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{post.profiles.full_name}</span>
                </div>
              )}
            </div>

            {post.excerpt && (
              <p className="text-xl text-gray-700 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Article Content */}
          <div className="max-w-none">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-orange-500 prose-strong:text-gray-900 prose-blockquote:border-orange-500 prose-blockquote:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <Link to="/blog">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Читать другие статьи
                </Button>
              </Link>
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
