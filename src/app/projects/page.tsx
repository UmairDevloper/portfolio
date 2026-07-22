"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
    FaGithub,
    FaExternalLinkAlt,
    FaPlayCircle
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
    SiGooglegemini,
    SiPython,
    SiJsonwebtokens,
    SiPrisma, SiVercel, SiGoogle
} from "react-icons/si";

import DarkAmbientSection from "../Components/layouts/DarkBg";

const projects = [
    {
        title: "Intern-Track",
        description:
            "A full-stack internship application tracker built with Next.js, Prisma, and PostgreSQL.",

        image: "/pro1.png",
        video: "/vid1.mp4",
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
        title: "ResumeIQ",
        description:
            "An AI-powered resume analyzer that scores resumes against job descriptions, using Google's Gemini API to generate ATS match scores with actionable feedback.",

        image: "/pro2.png",
        video: "/vid2.mp4",

        tech: [
            { icon: <SiNextdotjs />, name: "Next.js" },
            { icon: <SiPrisma />, name: "Prisma" },
            { icon: <SiPostgresql />, name: "PostgreSQL" },
            { icon: <SiTailwindcss />, name: "Tailwind" },
            { icon: <SiVercel />, name: "Vercel" },
            { icon: <SiGoogle />, name: "Auth.js" },
            { icon: <SiGooglegemini />, name: "Gemini" },
        ],

        github: "https://github.com/UmairDevloper/ResumeIQ",
        live: "https://resume-iq-gamma-sandy.vercel.app/",
    },

    {
        title: "SecureAuth API",
        description:
            "A backend authentication and authorization system built with FastAPI, featuring JWT-based login, role-based access control, and password hashing for secure API access.",

        image: "/pro3.jpeg",
        video: "/vid3.mp4",

        tech: [
            { icon: <SiFastapi />, name: "FastAPI" },
            { icon: <SiPython />, name: "Python" },
            { icon: <SiJsonwebtokens />, name: "JWT" },
        ],

        github: "https://github.com/UmairDevloper/FastAPI-Complete-Guide/tree/main/Authentication%20%26%20Authorization",
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
                                <div className="mt-8 flex flex-wrap items-center gap-3">

                                    {/* GITHUB */}
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                flex items-center justify-center gap-2
                px-4 sm:px-5 py-2.5 sm:py-3
                rounded-2xl
                bg-white/5
                border border-white/10
                text-white text-sm sm:text-base
                hover:bg-white/10
                transition
            "
                                        >
                                            <FaGithub />
                                            GitHub
                                        </Link>
                                    )}

                                    {/* WATCH DEMO */}
                                    {project.video && (
                                        <Link
                                            href={project.video}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                flex items-center justify-center gap-2
                px-4 sm:px-5 py-2.5 sm:py-3
                rounded-2xl
                bg-white/5
                border border-white/10
                text-white text-sm sm:text-base
                hover:bg-white/10
                transition
            "
                                        >
                                            <FaPlayCircle size={18} />
                                            Watch Demo
                                        </Link>
                                    )}

                                    {/* LIVE */}
                                    {project.live && (
                                        <Link
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                flex items-center justify-center gap-2
                px-4 sm:px-5 py-2.5 sm:py-3
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                via-purple-500
                to-pink-500
                text-white text-sm sm:text-base font-medium
                hover:opacity-90
                transition
            "
                                        >
                                            <FaExternalLinkAlt />
                                            Live Demo
                                        </Link>
                                    )}

                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </section>
        </DarkAmbientSection>
    );
}