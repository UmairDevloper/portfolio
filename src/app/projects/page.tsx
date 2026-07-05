"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiMongodb,
    SiTailwindcss,
    SiDocker,
    SiNodedotjs,
    SiOpenai,
    SiPostgresql,
    SiFastapi,
    SiPrisma, SiVercel, SiGoogle
} from "react-icons/si";

import DarkAmbientSection from "../Components/layouts/DarkBg";

const projects = [
    {
        title: "Intern-Track",
        description:
            "A full-stack internship application tracker built with Next.js, Prisma, and PostgreSQL.",

        image: "/pro1.png",

        tech: [
            { icon: <SiNextdotjs />, name: "Next.js" },
            { icon: <SiPrisma />, name: "Prisma" },
            { icon: <SiPostgresql />, name: "PostgreSQL" },
            { icon: <SiTailwindcss />, name: "Tailwind" },
            { icon: <SiVercel />, name: "Vercel" },
            { icon: <SiGoogle />, name: "Auth.js" },

        ],

        github: "https://github.com/UmairDevloper/InternTrack-Project",
        live: "https://intern-track-project-nine.vercel.app/",
    },

    {
        title: "Full Stack DevOps Dashboard",
        description:
            "Modern monitoring and deployment dashboard with authentication, analytics, scalable backend architecture, and cloud-ready deployment workflows.",

        image: "/projects/project2.png",

        tech: [
            { icon: <SiNextdotjs />, name: "Next.js" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiTailwindcss />, name: "Tailwind" },
            { icon: <SiDocker />, name: "Docker" },
        ],

        github: "https://github.com/yourusername/project",
        live: "https://yourproject.vercel.app",
    },

    {
        title: "AI Resume Analyzer",
        description:
            "AI-powered resume analysis platform using intelligent parsing, ATS optimization logic, and real-time feedback generation for candidates.",

        image: "/projects/project3.png",

        tech: [
            { icon: <SiFastapi />, name: "FastAPI" },
            { icon: <SiPostgresql />, name: "PostgreSQL" },
            { icon: <SiOpenai />, name: "OpenAI" },
            { icon: <SiTailwindcss />, name: "Tailwind" },
        ],

        github: "https://github.com/yourusername/project",
        live: "https://yourproject.vercel.app",
    },
];

export default function ProjectsPage() {
    return (
        <DarkAmbientSection>
            <section
                className="
                relative
                min-h-screen
                py-28 md:py-32
                px-6 md:px-16
                overflow-hidden
            "
            >

                {/* 🌌 BACKGROUND GLOW */}
                <div
                    className="
                    absolute top-0 left-1/2 -translate-x-1/2
                    w-[700px] h-[700px]
                    bg-gradient-to-r
                    from-cyan-500/10
                    via-purple-500/10
                    to-pink-500/10
                    blur-3xl
                    rounded-full
                    pointer-events-none
                "
                />

                {/* 🔥 HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="
                    relative z-10
                    text-center
                    max-w-4xl
                    mx-auto
                "
                >

                    <h1
                        className="
                        text-4xl sm:text-5xl md:text-6xl
                        font-bold
                        text-white
                        leading-tight
                    "
                    >
                        Featured{" "}
                        <span
                            className="
                            bg-gradient-to-r
                            from-cyan-400
                            via-purple-400
                            to-pink-500
                            text-transparent
                            bg-clip-text
                        "
                        >
                            Projects
                        </span>
                    </h1>

                    <p
                        className="
                        mt-6
                        text-white/60
                        text-sm md:text-lg
                        leading-relaxed
                    "
                    >
                        A collection of scalable systems, AI-powered applications,
                        automation workflows, and production-focused full stack projects
                        built with modern technologies and deployment-ready architecture.
                    </p>

                </motion.div>

                {/* 🧊 PROJECT GRID */}
                <div
                    className="
                    relative z-10
                    mt-20
                    grid grid-cols-1
                    lg:grid-cols-2
                    xl:grid-cols-3
                    gap-8
                "
                >

                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="
                            group
                            relative
                            rounded-[2rem]
                            overflow-hidden

                            bg-white/5
                            backdrop-blur-2xl
                            border border-white/10

                            hover:border-cyan-400/20
                            hover:bg-white/7

                            transition-all duration-500
                        "
                        >

                            {/* IMAGE */}
                            <div className="relative h-56 overflow-hidden">

                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="
                                    object-cover
                                    group-hover:scale-105
                                    transition-transform duration-700
                                "
                                />

                                {/* IMAGE OVERLAY */}
                                <div
                                    className="
                                    absolute inset-0
                                    bg-gradient-to-t
                                    from-black/70
                                    via-black/10
                                    to-transparent
                                "
                                />

                            </div>

                            {/* CONTENT */}
                            <div className="p-7">

                                {/* TITLE */}
                                <h2
                                    className="
                                    text-2xl
                                    font-semibold
                                    text-white
                                "
                                >
                                    {project.title}
                                </h2>

                                {/* DESCRIPTION */}
                                <p
                                    className="
                                    mt-4
                                    text-white/60
                                    text-sm
                                    leading-relaxed
                                "
                                >
                                    {project.description}
                                </p>

                                {/* TECH STACK */}
                                <div
                                    className="
                                    mt-6
                                    flex flex-wrap
                                    gap-3
                                "
                                >

                                    {project.tech.map((item, i) => (
                                        <div
                                            key={i}
                                            className="
                                            flex items-center gap-2

                                            px-3 py-2
                                            rounded-xl

                                            bg-white/5
                                            border border-white/10

                                            text-white/80
                                            text-sm
                                        "
                                        >
                                            <span className="text-cyan-400">
                                                {item.icon}
                                            </span>

                                            {item.name}
                                        </div>
                                    ))}

                                </div>

                                {/* BUTTONS */}
                                <div className="mt-8 flex gap-4">

                                    {/* GITHUB */}
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="
                                        flex items-center gap-2

                                        px-5 py-3
                                        rounded-2xl

                                        bg-white/5
                                        border border-white/10

                                        text-white
                                        hover:bg-white/10

                                        transition
                                    "
                                    >
                                        <FaGithub />
                                        GitHub
                                    </Link>

                                    {/* LIVE */}
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        className="
                                        flex items-center gap-2

                                        px-5 py-3
                                        rounded-2xl

                                        bg-gradient-to-r
                                        from-cyan-500
                                        via-purple-500
                                        to-pink-500

                                        text-white
                                        font-medium

                                        hover:opacity-90
                                        transition
                                    "
                                    >
                                        <FaExternalLinkAlt />
                                        Live Demo
                                    </Link>

                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </section>
        </DarkAmbientSection>
    );
}