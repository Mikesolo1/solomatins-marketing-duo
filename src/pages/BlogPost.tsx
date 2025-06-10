
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
    if (!slug) return;

    const fetchPost = async () => {
      setLoading(true);
      const postData = await getPostBySlug(slug);
      setPost(postData);
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  // Обновляем meta теги для SEO
  useEffect(() => {
    if (post) {
      // Обновляем title страницы
      document.title = post.meta_title || post.title;
      
      // Обновляем meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.meta_description || post.excerpt || '');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = post.meta_description || post.excerpt || '';
        document.head.appendChild(meta);
      }

      // Обновляем meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (post.meta_keywords) {
        if (metaKeywords) {
          metaKeywords.setAttribute('content', post.meta_keywords);
        } else {
          const meta = document.createElement('meta');
          meta.name = 'keywords';
          meta.content = post.meta_keywords;
          document.head.appendChild(meta);
        }
      }
    }

    // Очистка при размонтировании
    return () => {
      document.title = 'Blog';
    };
  }, [post]);

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
            <div className="aspect-video mb-8 overflow-hidden rounded-lg max-w-4xl mx-auto">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Header */}
          <header className="mb-8 max-w-4xl mx-auto">
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
          <div className="max-w-4xl mx-auto">
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200 max-w-4xl mx-auto">
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
