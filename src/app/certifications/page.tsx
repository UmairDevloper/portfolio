"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
    {
        company: "Oracle",
        logo: "/oracle.jpeg",
        title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
        desc: "Demonstrates proficiency in designing and implementing end-to-end data science pipelines on Oracle Cloud Infrastructure, including data engineering, machine learning model development, evaluation, and deployment in scalable cloud environments for production use cases.",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=FE7DD819053D17A95A10156722D8A00631EF7129AB869F761C6A78EE30A89021",
    },
    {
        company: "Oracle",
        logo: "/oracle.jpeg",
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        desc: "This certification demonstrates foundational competency in artificial intelligence and machine learning concepts, including model training, data processing, and deployment fundamentals using Oracle Cloud Infrastructure AI services. It reflects the ability to understand and apply AI workflows in real-world cloud environments.",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=FF9F6F83DE7458919C58A5617DFEEFF60EA87BA9B94A2D8237713D0135037746",
    },
    {
        company: "Google / Coursera",
        logo: "/google.png",
        title: "Crash Course on Python",
        desc: "This certification demonstrates foundational proficiency in Python programming, covering core concepts such as variables, data structures, loops, functions, and debugging. Part of Google's IT Automation with Python Professional Certificate, it reflects the ability to write and troubleshoot basic Python scripts for real-world automation tasks.",
        link: "https://www.coursera.org/account/accomplishments/verify/VZ0SNVR765S5?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
];

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
        transition: { duration: 0.5 },
    },
};

export default function CertificationsPage() {
    return (
        <section className="relative min-h-screen py-24 px-6 md:px-16 overflow-hidden my-15 md:my-17">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.10),transparent_65%)]" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Certifications &{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
                            Credentials
                        </span>
                    </h1>

                    <p className="mt-6 text-white/60 max-w-3xl mx-auto">
                        Verified certifications from industry-recognized platforms demonstrating foundational and practical engineering skills.
                    </p>
                </motion.div>

                {/* GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >

                    {certifications.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={card}
                            whileHover={{ y: -6, scale: 1.01 }}
                            className="
                relative p-6 md:p-8
                rounded-3xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                overflow-hidden
              "
                        >

                            {/* glow */}
                            <div className="
                absolute inset-0
                bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10
                opacity-0 hover:opacity-100 transition
              " />

                            {/* TOP: logo + company */}
                            <div className="relative z-10 flex items-center gap-4">

                                <div className="
                  w-14 h-14
                  rounded-2xl
                  bg-white/10
                  border border-white/10
                  flex items-center justify-center
                  overflow-hidden
                ">
                                    <Image
                                        src={item.logo}
                                        alt={item.company}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-white font-semibold text-lg">
                                        {item.company}
                                    </h3>
                                    <p className="text-white/50 text-sm">
                                        Verified Certification
                                    </p>
                                </div>

                            </div>

                            {/* TITLE */}
                            <h2 className="relative z-10 mt-6 text-xl md:text-2xl font-semibold text-white">
                                {item.title}
                            </h2>

                            {/* DESC */}
                            <p className="relative z-10 mt-4 text-white/60 text-sm md:text-base leading-relaxed">
                                {item.desc}
                            </p>

                            {/* LINK */}
                            <a
                                href={item.link}
                                target="_blank"
                                className="
                  relative z-10
                  inline-block
                  mt-6
                  text-cyan-400 text-sm font-medium
                  hover:underline
                "
                            >
                                View Certificate →
                            </a>

                        </motion.div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
}