"use client";

import {
    FaLinkedin,
    FaGithub,
    FaDiscord,
    FaYoutube,
    FaHackerrank,
    FaCode,
} from "react-icons/fa";

import {
    SiLeetcode,
    SiHashnode,
    SiDevdotto,
} from "react-icons/si";

import { motion } from "framer-motion";

const ecosystem = [
    {
        icon: SiLeetcode,
        title: "Algorithm Mastery (LeetCode)",
        link: "https://leetcode.com/u/muhammadumairullah669/",
        desc: "Daily problem-solving to strengthen data structures and interview-level thinking.",
    },
    {
        icon: FaHackerrank,
        title: "Structured Coding (HackerRank)",
        link: "https://www.hackerrank.com/profile/muhammadumairul1",
        desc: "Practicing core programming concepts across multiple domains.",
    },
    {
        icon: FaGithub,
        title: "System Building (GitHub)",
        link: "https://github.com/UmairDevloper",
        desc: "Real projects, scalable systems, and deployment-ready applications.",
    },
    {
        icon: SiDevdotto,
        title: "Developer Writing (Dev.to)",
        link: "https://dev.to/umair01",
        desc: "Sharing engineering insights and technical breakdowns.",
    },
    {
        icon: SiHashnode,
        title: "Technical Writing (Hashnode)",
        link: "https://hashnode.com/onboard?callbackUrl=%2Fdashboards",
        desc: "Deep technical documentation and learning notes.",
    },
    {
        icon: FaLinkedin,
        title: "Professional Identity (LinkedIn)",
        link: "https://linkedin.com/in/umairullah",
        desc: "Networking and career-focused presence.",
    },
    {
        icon: FaDiscord,
        title: "Developer Communities (Discord)",
        link: "https://discord.com/",
        desc: "Active participation in dev and AI communities.",
    },
    {
        icon: FaCode,
        title: "Engineering Mindset",
        link: "#",
        desc: "Build → Break → Learn → Improve cycle of engineering growth.",
    },
];

// 🔥 animation configs
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const card = {
    hidden: { opacity: 0, y: 25 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function EcosystemPage() {
    return (
        <section className="relative min-h-screen py-24 px-6 md:px-16 overflow-hidden my-15 md:my-17">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_65%)]" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        My Engineering{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
                            Ecosystem
                        </span>
                    </h1>

                    <p className="mt-6 text-white/60 max-w-3xl mx-auto">
                        Platforms where I learn, build, write, and grow as a modern full-stack engineer.
                    </p>
                </motion.div>

                {/* GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {ecosystem.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.a
                                key={i}
                                href={item.link}
                                target="_blank"
                                variants={card}
                                whileHover={{
                                    y: -6,
                                    scale: 1.01,
                                }}
                                className="
                    relative p-6 md:p-8
                    rounded-3xl
                    bg-white/5 backdrop-blur-xl
                    border border-white/10
                    overflow-hidden
                    "
                            >
                                {/* glow hover */}
                                <div className="
                    absolute inset-0 opacity-0 group-hover:opacity-100
                    transition
                    bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10
                    " />

                                <div className="
                    relative z-10
                    w-14 h-14
                    rounded-2xl
                    bg-gradient-to-br from-cyan-500 to-purple-500
                    flex items-center justify-center
                    ">
                                    <Icon className="text-white text-2xl" />
                                </div>

                                <h3 className="relative z-10 mt-6 text-xl md:text-2xl font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="relative z-10 mt-4 text-white/60 text-sm md:text-base">
                                    {item.desc}
                                </p>

                                <div className="relative z-10 mt-6 text-cyan-400 text-sm font-medium">
                                    Visit →
                                </div>
                            </motion.a>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}