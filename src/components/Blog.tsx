import { useState } from "react";
import { posts, type Post } from "../../data/posts";
import BlogCard from "./BlogCard";

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const allTags: string[] = [
    "all",
    ...Array.from(new Set(posts.flatMap((post) => post.tags))),
  ];

  const filteredPosts: Post[] =
    selectedTag === "all"
      ? posts
      : posts.filter((post) => post.tags.includes(selectedTag));

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bo  ld mb-6 text-center">Mijn Blog</h1>

      <div className="mb-8 flex flex-wrap gap-3 justify-center">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full cursor-pointer uppercase font-medium text-sm transition-colors ${
              selectedTag === tag
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="max-w-2xl">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
