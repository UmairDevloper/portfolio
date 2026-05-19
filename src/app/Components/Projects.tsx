"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import DarkAmbientSection from "./layouts/DarkBg";

export default function ProjectsCTA() {
    return (
        <DarkAmbientSection> 
            <section className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden">

                {/* 🌑 BACKGROUND */}
                <div className="absolute inset-0 bg-black" />

                {/* 💡 CENTER GLOW */}
                <div className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.10),transparent_65%)]
        " />

                {/* 📦 CONTENT */}
                <div className="relative z-10 max-w-5xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="
                relative
                p-8 md:p-14
                rounded-[2rem]
                bg-white/5
                backdrop-blur-2xl
                border border-white/10
                overflow-hidden
                text-center
            "
                    >

                        {/* 🌌 Glow Overlay */}
                        <div className="
                absolute inset-0
                bg-gradient-to-br
                from-cyan-500/10
                via-purple-500/10
                to-pink-500/10
            " />

                        {/* 🔥 CONTENT */}
                        <div className="relative z-10">

                            {/* HEADING */}
                            <h2 className="
                text-3xl sm:text-4xl md:text-5xl
                font-bold
                text-white
                leading-tight
                ">
                                Turning Ideas Into{" "}
                                <span className="
                    bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500
                    text-transparent bg-clip-text
                ">
                                    Scalable Digital Systems
                                </span>
                            </h2>

                            {/* DESCRIPTION */}
                            <p className="
                mt-6
                max-w-2xl mx-auto
                text-white/60
                text-sm md:text-base
                leading-relaxed
                ">
                                Explore a collection of projects focused on full-stack development,
                                deployment-ready architecture, AI automation workflows,
                                and practical real-world problem solving.
                            </p>

                            {/* CTA BUTTON */}
                            <motion.a
                                href="/projects"
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.98,
                                }}
                                className="
                    inline-flex items-center gap-3
                    mt-10
                    px-8 py-4
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    via-purple-500
                    to-pink-500
                    text-white
                    font-semibold
                    shadow-lg shadow-cyan-500/20
                    transition
                "
                            >

                                Explore My Projects

                                <FaArrowRight className="text-sm" />

                            </motion.a>

                        </div>

                    </motion.div>

                </div>
            </section>
        </DarkAmbientSection>
    );
}