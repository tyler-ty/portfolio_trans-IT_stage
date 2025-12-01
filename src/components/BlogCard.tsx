import { Link } from "react-router-dom";
import type { Posts } from "../../types.ts";
import Markdown from "react-markdown";

interface BlogCardProps {
  post: Posts;
}

export default function BlogCard({ post }: BlogCardProps) {
  let previewContent = "";
  if (post.markdown) {
    previewContent =
      post.markdown.length > 150
        ? post.markdown.slice(0, 150) + "..."
        : post.markdown;
  }

  return (
    <Link to={`/blog/${post.id}`} className="block">
      <div className="bg-card border border-highlight rounded-xl overflow-hidden shadow mb-6 hover:shadow-lg transition-shadow duration-200">
        {post.thumbnail && post.title && (
          <img
            src={post.thumbnail ?? ""}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
        )}

        <div className="p-6">
          <h2 className="text-heading text-2xl font-bold mb-2">
            {post.title}
          </h2>
          <p className="text-text mb-4"><Markdown>{previewContent}</Markdown></p>

          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-800/20 text-link text-xs font-semibold px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
