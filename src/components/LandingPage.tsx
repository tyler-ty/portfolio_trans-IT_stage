import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { useContext } from "react";
import type { Posts } from "../../types.ts"
import { BlogContext } from "./BlogContext/BlogContext.tsx";

export default function LandingPage() {
  const { posts = [] } = useContext(BlogContext)
  const sortedPosts: Posts[] = posts && [...posts].sort(
    (a, b) => new Date(b?.created_at).getTime() - new Date(a?.created_at).getTime()
  );

  const latestPost: Posts = posts && sortedPosts[0];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-link/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-link/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-6 md:px-12 py-15">

        <motion.h1
          className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl text-heading mb-6 bg-gradient-to-r from-heading to-link bg-clip-text text-transparent leading-[1.2] pb-2"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welkom op mijn Stageportfolio
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-text max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Op deze website documenteer ik mijn ervaringen en leerprocessen tijdens mijn stage bij Trans-IT.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://trans-it.be/wp-content/uploads/2023/11/logo-trans-it-2.png"
            alt="Trans-IT Logo"
            className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <Link
            to="/blogs"
            className="group relative bg-link text-background px-8 py-3.5 rounded-xl shadow-lg font-semibold hover:bg-link-hover transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">Bekijk Blog</span>
            <div className="absolute inset-0 rounded-xl bg-link-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

        </motion.div>
      </div>

      {latestPost && (
        <motion.section
          className="relative w-full max-w-6xl mx-auto px-6 md:px-12 py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance text-heading mb-4">
              Laatste Blogpost
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <BlogCard post={latestPost} />
          </div>
        </motion.section>
      )}
    </div>
  );
}
