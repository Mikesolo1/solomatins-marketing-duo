import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type BlogPostInsert = Database['public']['Tables']['blog_posts']['Insert'];
type BlogPostUpdate = Database['public']['Tables']['blog_posts']['Update'];

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  author_id: string;
  views: number;
  profiles?: {
    full_name: string;
    avatar_url?: string;
  };
}

export const useBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async (published = true) => {
    setLoading(true);
    try {
      let query = supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (published) {
        query = query.eq('published', true);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching posts:', error);
        throw error;
      }
      
      // Получаем информацию об авторах отдельно
      const postsWithAuthors = await Promise.all(
        (data || []).map(async (post) => {
          const { data: profile } = await supabase
            .from('profiles')
            .select('full_name, avatar_url')
            .eq('id', post.author_id)
            .single();
          
          return {
            ...post,
            profiles: profile || undefined
          };
        })
      );
      
      setPosts(postsWithAuthors);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPostBySlug = async (slug: string) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (error) throw error;
      
      // Получаем информацию об авторе
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name, avatar_url')
        .eq('id', data.author_id)
        .single();
      
      const postWithAuthor = {
        ...data,
        profiles: profile || undefined
      };
      
      // Увеличиваем счетчик просмотров
      if (data) {
        await supabase
          .from('blog_posts')
          .update({ views: data.views + 1 })
          .eq('id', data.id);
      }

      return postWithAuthor;
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  };

  const createPost = async (postData: BlogPostInsert) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .insert(postData)
        .select()
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Error creating post:', error);
      return { data: null, error };
    }
  };

  const updatePost = async (id: string, postData: BlogPostUpdate) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Error updating post:', error);
      return { data: null, error };
    }
  };

  const deletePost = async (id: string) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      return { error: null };
    } catch (error) {
      console.error('Error deleting post:', error);
      return { error };
    }
  };

  const uploadImage = async (file: File) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      return { url: data.publicUrl, error: null };
    } catch (error) {
      console.error('Error uploading image:', error);
      return { url: null, error };
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    fetchPosts,
    getPostBySlug,
    createPost,
    updatePost,
    deletePost,
    uploadImage,
  };
};
