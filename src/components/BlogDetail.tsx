import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import { useContext } from "react";
import { BlogContext } from "./BlogContext/BlogContext";
import Markdown from 'react-markdown'
import type { Posts } from "../../types";

export default function BlogDetail() {
  const {posts} = useContext(BlogContext)
  const { id } = useParams<{ id: string }>();

  const post: Posts | undefined = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Post niet gevonden</h1>
        <Link
          to="/blog"
          className="bg-[#003c7d] text-white px-6 py-3 rounded-2xl shadow hover:bg-[#0053a0] transition"
        >
          Terug naar Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Terug knop */}
        <Link
          to="/blogs"
          className="flex items-center text-blue-600 hover:underline transition-colors text-sm md:text-base"
        >
          <HiArrowLeft className="mr-2" /> <p>Terug naar Blog</p>
        </Link>

        {/* Titel */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
          {post.title}
        </h1>

        {/* Datum */}
        <p className="text-sm md:text-base text-gray-500 mb-6">
          Gepubliceerd op {new Date(post.created_at).toLocaleDateString("nl-NL")}
        </p>

        {/* Afbeelding */}
        {post.attachments?.[0] && (
          <img
            src={post.attachments[0]}
            alt={post.title ?? ""}
            className="w-full h-auto mb-6 rounded"
          />
        )}
        <div className="text-gray-700 text-base md:text-lg space-y-4"><Markdown>{post.markdown}</Markdown></div>
      </motion.div>
    </div>
  );
}
