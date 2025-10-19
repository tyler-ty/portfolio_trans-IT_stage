import { useState, useContext } from "react";
import BlogCard from "./BlogCard";
import type { Posts } from "../../types.ts";
import { BlogContext } from "./BlogContext/BlogContext.tsx";


export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const {posts} = useContext(BlogContext)

  const allTags: string[] = [
    "all",
    ...Array.from(new Set(posts.flatMap((post) => post.tags ?? []))),
  ];

  const filteredPosts: Posts[] =
    selectedTag === "all"
      ? posts
      : posts.filter((post) => (post.tags ?? []).includes(selectedTag));

  return (
    <div className="flex flex-col items-center px-4 py-8 bg-background min-h-screen ">
      <h1 className="text-heading text-3xl font-bold mb-6 text-center">Mijn Blog</h1>

      <div className="mb-8 flex flex-wrap gap-3 justify-center">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full cursor-pointer uppercase font-medium text-sm transition-colors ${
              selectedTag === tag
                ? "bg-link text-background"
                : "bg-card text-text hover:bg-highlight"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="max-w-2xl w-full space-y-6">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
