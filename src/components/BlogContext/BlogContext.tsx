import React, { useState, useEffect } from "react";
import type { Posts } from "../../../types.ts";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_PUBLIC_SUPABASE_ANON);

export interface BlogContext {
    posts:Posts[],
    loading:boolean
}

export const BlogProvider = ({children}: {children: React.ReactNode}) => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
      getPosts();
    }, []);
  
    const getPosts = async () => {
      try {
        setLoading(true)
        const { data } = await supabase.from("BlogPosts").select();
        setPosts(data as Posts[]);
      } catch (error) {
        console.log(error);
        setPosts([]);
      } finally {
        setLoading(false)
      }
    };

  return (
      <BlogContext.Provider value={{posts: posts, loading: loading}}>
          {children}
      </BlogContext.Provider>
  )
}

export const BlogContext = React.createContext<BlogContext>({posts: [], loading: false});