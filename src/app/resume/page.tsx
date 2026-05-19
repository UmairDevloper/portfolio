"use client";

import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";

export default function ResumePage() {
    return (
        <section className="relative min-h-screen py-24 px-6 md:px-16 overflow-hidden">

            {/* 🌑 BACKGROUND */}
            <div className="absolute inset-0 bg-black" />

            {/* 💡 GLOW */}
            <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_65%)]
      " />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        My{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
                            Resume
                        </span>
                    </h1>

                    <p className="mt-6 text-white/60 max-w-2xl mx-auto">
                        View or download my latest resume highlighting full-stack development,
                        AI automation, and DevOps-oriented engineering experience.
                    </p>
                </motion.div>

                {/* ACTION BUTTONS */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

                    {/* VIEW */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="
              flex items-center justify-center gap-3
              px-6 py-3
              rounded-full
              bg-white/10
              border border-white/10
              backdrop-blur-xl
              text-white
              hover:bg-white/20
              transition
            "
                    >
                        <FaEye />
                        Preview Resume
                    </a>

                    {/* DOWNLOAD */}
                    <a
                        href="/resume.pdf"
                        download
                        className="
              flex items-center justify-center gap-3
              px-6 py-3
              rounded-full
              bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
              text-white font-semibold
              shadow-lg shadow-purple-500/20
              hover:scale-105
              transition
            "
                    >
                        <FaDownload />
                        Download PDF
                    </a>

                </div>

                {/* PDF PREVIEW BOX */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="
            mt-16
            rounded-3xl
            overflow-hidden
            border border-white/10
            bg-white/5
            backdrop-blur-xl
          "
                >
                    <iframe
                        src="/resume.pdf"
                        className="w-full h-[700px] md:h-[850px]"
                    />
                </motion.div>

            </div>
        </section>
    );
}