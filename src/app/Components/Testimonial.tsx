"use client";

import { motion } from "framer-motion";
import {
    FaCode,
    FaServer,
    FaRobot,
    FaCloud,
} from "react-icons/fa";
import DarkAmbientSection from "./layouts/DarkBg";

const services = [
    {
        icon: FaCode,
        title: "Full Stack Web Development",
        text: "Building scalable and responsive web applications using modern frontend and backend technologies with production-focused architecture.",
    },
    {
        icon: FaRobot,
        title: "AI Automation Systems",
        text: "Creating automation workflows and intelligent systems that reduce manual work and improve operational efficiency.",
    },
    {
        icon: FaServer,
        title: "Backend & API Engineering",
        text: "Designing maintainable APIs, authentication systems, databases, and structured backend workflows for scalable applications.",
    },
    {
        icon: FaCloud,
        title: "Deployment & Cloud Workflow",
        text: "Deploying applications using modern platforms and containerized environments with performance and maintainability in mind.",
    },
];

export default function TrustSection() {
    return (
        <DarkAmbientSection>
            <section className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden rounded-3xl
                bg-white/8 backdrop-blur-xl
                border border-white/20">

                {/* 🌑 BACKGROUND */}
                <div className="absolute inset-0 bg-black" />

                {/* 💡 CENTER GLOW */}
                <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_65%)]
      " />

                {/* 🌫️ SOFT LIGHTING */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

                {/* 📦 CONTENT */}
                <div className="relative z-10 max-w-7xl mx-auto">

                    {/* HEADER */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >

                        <h2 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-bold text-white
          ">
                            Building Systems That{" "}
                            <span className="
              bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500
              text-transparent bg-clip-text
            ">
                                Solve Real Problems
                            </span>
                        </h2>

                        <p className="
            mt-5
            text-white/60
            max-w-3xl mx-auto
            text-sm md:text-base
            leading-relaxed
          ">
                            Focused on scalable web development, deployment-ready architectures,
                            and modern AI automation workflows designed for practical use cases.
                        </p>

                    </motion.div>

                    {/* SERVICES GRID */}
                    <div className="
          mt-16
          grid grid-cols-1 md:grid-cols-2
          gap-6 lg:gap-8
        ">

                        {services.map((service, i) => {
                            const Icon = service.icon;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -6,
                                    }}
                                    className="
                  group
                  relative
                  p-6 md:p-8
                  rounded-3xl
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  overflow-hidden
                "
                                >

                                    {/* Glow Hover */}
                                    <div className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10
                " />

                                    {/* ICON */}
                                    <div className="
                  relative z-10
                  w-14 h-14
                  rounded-2xl
                  bg-gradient-to-br from-cyan-500 to-purple-500
                  flex items-center justify-center
                  shadow-lg shadow-cyan-500/20
                ">
                                        <Icon className="text-white text-2xl" />
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="
                  relative z-10
                  mt-6
                  text-xl md:text-2xl
                  font-semibold text-white
                ">
                                        {service.title}
                                    </h3>

                                    {/* TEXT */}
                                    <p className="
                  relative z-10
                  mt-4
                  text-white/60
                  text-sm md:text-base
                  leading-relaxed
                ">
                                        {service.text}
                                    </p>

                                </motion.div>
                            );
                        })}

                    </div>

                </div>
            </section>
        </DarkAmbientSection>
    );
}