import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { useContext } from "react";
import type {Posts} from "../../types.ts"
import { BlogContext } from "./BlogContext/BlogContext.tsx";
export default function LandingPage() {
  const {posts = []} = useContext(BlogContext)
  const sortedPosts:Posts[] = posts && [...posts].sort(
    (a, b) => new Date(b?.created_at).getTime() - new Date(a?.created_at).getTime()
  );

  const latestPost: Posts = posts && sortedPosts[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-6 md:px-12 py-10">
      <motion.h1
        className="text-2xl md:text-4xl font-extrabold mb-4 text-heading max-w-3xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Welkom bij mijn Stageportfolio
      </motion.h1>

      <motion.p
        className="text-base md:text-lg text-text max-w-6xl mx-auto mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Op deze website zal ik mijn ervaring documenteren tijdens mijn stage bij Trans-IT.

      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-3 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <Link
          to="/blogs"
          className="bg-link text-background px-6 py-2.5 rounded-2xl shadow font-medium hover:bg-link-hover transition"
        >
          Bekijk Blog
        </Link>
      </motion.div>


      <motion.img
        src="https://trans-it.be/wp-content/uploads/2023/11/logo-trans-it-2.png"
        alt="Stage banner"
        className="mt-4 w-24 h-24 md:w-32 md:h-32 object-contain shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      />

      {latestPost && (
        <motion.div
          className="w-full max-w-3xl mt-12 text-left"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-heading mb-4">
            Laatste blogpost
          </h2>
          <BlogCard post={latestPost} />
        </motion.div>
      )}
    </div>
  );
}
