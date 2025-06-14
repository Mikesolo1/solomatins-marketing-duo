
import { useState, useEffect, useCallback } from 'react';
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
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  profiles?: {
    full_name: string;
    avatar_url?: string;
  };
}

export const useBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = useCallback(async (published = true) => {
    console.log('Fetching posts, published:', published);
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

      console.log('Posts query result:', data, error);

      if (error) {
        console.error('Error fetching posts:', error);
        throw error;
      }
      
      // Получаем информацию об авторах отдельно, если есть посты
      if (data && data.length > 0) {
        const postsWithAuthors = await Promise.all(
          data.map(async (post) => {
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
        
        console.log('Posts with authors:', postsWithAuthors);
        setPosts(postsWithAuthors);
      } else {
        console.log('No posts found');
        setPosts([]);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const getPostBySlug = useCallback(async (slug: string) => {
    console.log('Getting post by slug:', slug);
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

      console.log('Post found:', postWithAuthor);
      return postWithAuthor;
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  }, []);

  const createPost = useCallback(async (postData: BlogPostInsert) => {
    console.log('Creating post:', postData);
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .insert(postData)
        .select()
        .single();

      if (error) throw error;
      console.log('Post created:', data);
      return { data, error: null };
    } catch (error) {
      console.error('Error creating post:', error);
      return { data: null, error };
    }
  }, []);

  const updatePost = useCallback(async (id: string, postData: BlogPostUpdate) => {
    console.log('Updating post:', id, postData);
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      console.log('Post updated:', data);
      return { data, error: null };
    } catch (error) {
      console.error('Error updating post:', error);
      return { data: null, error };
    }
  }, []);

  const deletePost = useCallback(async (id: string) => {
    console.log('Deleting post:', id);
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      console.log('Post deleted');
      return { error: null };
    } catch (error) {
      console.error('Error deleting post:', error);
      return { error };
    }
  }, []);

  const uploadImage = useCallback(async (file: File) => {
    console.log('Uploading image:', file.name, 'Size:', file.size);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = fileName;

      console.log('Uploading to path:', filePath);

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw uploadError;
      }

      console.log('Upload successful:', uploadData);

      const { data: urlData } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      console.log('Image uploaded successfully:', urlData.publicUrl);
      return { url: urlData.publicUrl, error: null };
    } catch (error) {
      console.error('Error uploading image:', error);
      return { url: null, error };
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

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
