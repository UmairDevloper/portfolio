"use client"

import { motion } from "framer-motion";
import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiPython,
    SiTailwindcss,
    SiNextdotjs,
    SiDocker,
    SiGithub,
    SiPostgresql,
    SiFastapi,
    SiVercel,
    SiRender,
    SiReact,
    SiExpress,
    SiMongodb,
    SiN8N,
} from "react-icons/si";

import { FaDatabase } from "react-icons/fa";


const techStack = [
    { icon: SiHtml5, name: "HTML", color: "#E34F26" },
    { icon: SiCss, name: "CSS", color: "#1572B6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },

    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
    { icon: SiExpress, name: "Express", color: "#ffffff" },

    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },

    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiFastapi, name: "FastAPI", color: "#009688" },

    { icon: FaDatabase, name: "SQL", color: "#f59e0b" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },

    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiGithub, name: "GitHub", color: "#ffffff" },

    { icon: SiVercel, name: "Vercel", color: "#ffffff" },
    { icon: SiRender, name: "Render", color: "#46E3B7" },

    { icon: SiN8N, name: "n8n", color: "#F05A28" },

    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
    { icon: SiPython, name: "Python", color: "#3776AB" },

];

export default function TechStack() {
    return (
        <section
            id="tachStack"
            className="mx-11 md:mx-12 my-8 py-10 md:py-12 px-20 md:px-22 2xl:px-25 overflow-hidden rounded-3xl
                bg-white/6 backdrop-blur-lg
                border border-white/10">

            {/* 🌑 BACKGROUND */}
            <div className="absolute inset-0 bg-black" />

            {/* 💡 CENTER GLOW */}
            <div className="
        absolute top-0 left-1/2 -translate-x-1/2
            w-[500px] h-[500px]
            bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10
            blur-3xl rounded-full
            pointer-events-none
      " />

            {/* 📦 CONTENT */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">

                {/* 🔥 HEADING */}
                <h2 className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-bold text-white
        ">
                    Tech Stack &{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                        Engineering Toolkit
                    </span>
                </h2>

                {/* 📄 SUBTITLE */}
                <p className="mt-5 text-white/60 max-w-2xl mx-auto text-sm md:text-base">
                    I work with modern full-stack and automation technologies to build scalable web systems,
                    production-ready applications, and AI-powered workflows.
                </p>

                {/* 💬 QUOTE */}
                <p className="mt-6 italic text-white/40 max-w-xl mx-auto text-sm">
                    “Great systems are not built with tools — they are built with the right combination of tools used with clarity and intent.”
                </p>

                {/* 🧊 TECH GRID */}
                <div className="
          mt-14
          grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5
          gap-6 md:gap-10
          items-center justify-items-center
        ">

                    {techStack.map((tech, i) => {
                        const Icon = tech.icon;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.05,
                                    ease: "easeOut",
                                }}
                                whileHover={{ scale: 1.1 }}
                                className="
                  flex flex-col items-center justify-center
                  p-4 md:p-6
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  rounded-2xl 
                "
                            >
                                <Icon size={34} color={tech.color} />

                                <span className="mt-3 text-xs md:text-sm text-white/70">
                                    {tech.name}
                                </span>
                            </motion.div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}
