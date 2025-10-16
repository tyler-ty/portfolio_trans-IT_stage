import type { Post } from "../../data/posts";
import { Link } from "react-router-dom";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  const previewContent =
    post.content.length > 150
      ? post.content.slice(0, 150) + "..."
      : post.content;

  return (
    <Link to={`/blog/${post.id}`} className="block">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow mb-6 hover:shadow-lg transition-shadow duration-200">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
        )}

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            {post.title}
          </h2>
          <p className="text-gray-700 mb-4">{previewContent}</p>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full"
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
