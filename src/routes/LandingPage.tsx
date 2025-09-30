import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-center px-6">
      {/* Hero sectie */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-800"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Welkom bij mijn Stageportfolio
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Hier deel ik mijn ervaringen, reflecties en projecten tijdens mijn WPL-stage. 
        Neem gerust een kijkje bij mijn blogposts of leer meer over mij en mijn stageplek.
      </motion.p>

      {/* Knoppen */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <Link
          to="/blog"
          className="bg-[#003c7d] text-white px-6 py-3 rounded-2xl shadow hover:bg-[#0053a0] transition"
        >
          Bekijk Blog
        </Link>
        <Link
          to="/about"
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-2xl shadow hover:bg-gray-300 transition"
        >
          Over Mij
        </Link>
      </motion.div>

      {/* Extra: ruimte voor een afbeelding of banner */}
      <motion.img
        src="https://trans-it.be/wp-content/uploads/2023/11/logo-trans-it-2.png"
        alt="Stage banner"
        className="mt-6 w-24 h-24 object-contain shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      />
    </div>
  );
}
