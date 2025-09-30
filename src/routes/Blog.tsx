import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

interface BlogPost {
  title: string;
  date: string;
  category: string;
  content: string;
}

const importPosts = import.meta.glob("./posts/week1.md", { query: '?raw' });

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    async function loadPosts() {
      const loadedPosts: BlogPost[] = await Promise.all(
        Object.entries(importPosts).map(async ([, resolver]) => {
          const raw = await resolver();
          const { data, content } = matter(raw);
          return {
            title: data.title as string,
            date: data.date as string,
            category: data.category as string,
            content: content as string,
          };
        })
      );        console.log(loadedPosts)
      setPosts(loadedPosts);
    }
    loadPosts();
  }, []);

  const filtered =
    filter === "all" ? posts : posts.filter((p) => p.category === filter);

  return (
    <>
      <div className="flex flex-col justify-center items-center p-6">
        <h2 className="text-2xl font-bold mb-4">Blog</h2>

        <div className="mb-4 space-x-2">
          <button
            onClick={() => console.log(posts)}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            Alle
          </button>
          <button
            onClick={() => setFilter("code")}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            Code
          </button>
          <button
            onClick={() => setFilter("teambuilding")}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            Teambuilding
          </button>
          <button
            onClick={() => setFilter("reflectie")}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            Reflectie
          </button>
        </div>

        {filtered.map((post, i) => (
          <div key={i} className="bg-gray-100 p-4 mb-4 rounded-xl shadow">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-sm text-gray-600">
              {post.date} – {post.category}
            </p>
            <div className="prose mt-2">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Blog;
