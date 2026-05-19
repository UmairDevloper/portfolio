"use client";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="
      relative
      overflow-hidden
      border-t border-white/10
    ">

            {/* 🌈 GRADIENT BACKGROUND */}
            <div className="
        absolute inset-0
        bg-gradient-to-br
        from-cyan-600
        via-purple-700
        to-pink-700
      " />

            {/* 🌑 DARK OVERLAY */}
            <div className="
        absolute inset-0
        bg-black/40
        backdrop-blur-xl
      " />

            {/* 💡 SOFT LIGHT */}
            <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]
      " />

            {/* 📦 CONTENT */}
            <div className="
        relative z-10
        max-w-7xl mx-auto
        px-6 md:px-16
        py-16 md:py-20
      ">

                {/* TOP SECTION */}
                <div className="
          flex flex-col lg:flex-row
          justify-between
          gap-14
        ">

                    {/* 🧠 LEFT SIDE */}
                    <div className="max-w-md">

                        {/* LOGO */}
                        <h2 className="
              text-3xl md:text-4xl
              font-black
              text-white
              tracking-wide
            ">
                            {`>_MU:/`}
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="
              mt-5
              text-white/75
              text-sm md:text-base
              leading-relaxed
            ">
                            Building scalable digital systems with modern full-stack development,
                            AI automation workflows, and deployment-focused engineering.
                        </p>

                        {/* SOCIALS */}
                        <div className="flex gap-4 mt-8">

                            <a
                                href="https://github.com/UmairDevloper"
                                className="
                  w-12 h-12
                  rounded-2xl
                  bg-white/10
                  border border-white/10
                  backdrop-blur-xl
                  flex items-center justify-center
                  hover:bg-white/20
                  transition
                "
                            >
                                <FaGithub className="text-white text-lg" />
                            </a>

                            <a
                                href="https://linkedin.com/in/umairullah"
                                className="
                  w-12 h-12
                  rounded-2xl
                  bg-white/10
                  border border-white/10
                  backdrop-blur-xl
                  flex items-center justify-center
                  hover:bg-white/20
                  transition
                "
                            >
                                <FaLinkedin className="text-white text-lg" />
                            </a>

                            <a
                                href="#"
                                className="
                  w-12 h-12
                  rounded-2xl
                  bg-white/10
                  border border-white/10
                  backdrop-blur-xl
                  flex items-center justify-center
                  hover:bg-white/20
                  transition
                "
                            >
                                <FaInstagram className="text-white text-lg" />
                            </a>

                        </div>

                    </div>

                    {/* 🔗 RIGHT LINKS */}
                    <div className="
            grid grid-cols-2 sm:grid-cols-3
            gap-10 md:gap-16
          ">

                        {/* NAVIGATION */}
                        <div>

                            <h3 className="
                text-white
                font-semibold
                text-lg
              ">
                                Navigation
                            </h3>

                            <div className="
                mt-5
                flex flex-col
                gap-3
              ">

                                <a href="#" className="text-white/70 hover:text-white transition">
                                    Home
                                </a>

                                <a href="/projects" className="text-white/70 hover:text-white transition">
                                    Projects
                                </a>

                                <a href="#contact" className="text-white/70 hover:text-white transition">
                                    Contact
                                </a>

                            </div>

                        </div>

                        {/* WORK */}
                        <div>

                            <h3 className="
                text-white
                font-semibold
                text-lg
              ">
                                Work
                            </h3>

                            <div className="
                mt-5
                flex flex-col
                gap-3
              ">

                                <a href="/projects" className="text-white/70 hover:text-white transition">
                                    Full Stack Development
                                </a>

                                <a href="/projects" className="text-white/70 hover:text-white transition">
                                    AI Automation
                                </a>

                                <a href="/projects" className="text-white/70 hover:text-white transition">
                                    Deployment Systems
                                </a>

                            </div>

                        </div>

                        {/* EXTRA */}
                        <div>

                            <h3 className="
                text-white
                font-semibold
                text-lg
              ">
                                More
                            </h3>

                            <div className="
                mt-5
                flex flex-col
                gap-3
              ">

                                <a href="/certifications" className="text-white/70 hover:text-white transition">
                                    Certifications
                                </a>

                                <a href="#tachStack" className="text-white/70 hover:text-white transition">
                                    Tech Stack
                                </a>

                                <a href="/resume" className="text-white/70 hover:text-white transition">
                                    Resume
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                {/* 🌑 DIVIDER */}
                <div className="
          mt-16
          border-t border-white/10
          pt-8
          flex flex-col md:flex-row
          justify-between
          items-center
          gap-5
        ">

                    {/* COPYRIGHT */}
                    <p className="
            text-white/60
            text-sm
            text-center md:text-left
          ">
                        © 2026 MU. Built with Next.js, Tailwind CSS & Framer Motion.
                    </p>

                    {/* BACK TO TOP */}
                    <a
                        href="#home"
                        className="
              flex items-center gap-2
              text-white/70
              hover:text-white
              transition
            "
                    >
                        Back to Top

                        <FaArrowUp className="text-sm" />
                    </a>

                </div>

            </div>

        </footer>
    );
}