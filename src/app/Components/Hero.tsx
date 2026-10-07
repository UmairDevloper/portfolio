"use client"
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";



const Hero = () => {
    const router = useRouter()
    return (
        <section className="relative w-full h-screen overflow-hidden  ">
            {/* 🌫️ SMART “BLANKET” OVER VIDEO */}
            <div className="absolute inset-0">
                {/* Base darkening layer */}
                <div className="absolute inset-0 bg-black/40" />

            </div>

            {/* 🎥 Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/pf1.mp4" type="video/mp4" />
            </video>

            {/* 🌑 Dark Overlay (IMPORTANT for readability) */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-black/60 via-black/40 to-black/80" />

            {/* 🧊 Content Layer */}
            <div className="relative z-10">
                <Navbar />

                {/* Hero Content */}
                <div className="flex flex-col md:flex-row items-center justify-between min-h-[100svh] py-24 md:py-0 px-6 md:px-16 gap-10">
                    {/* 🧠 LEFT CONTENT */}

                    <div className="flex-1 flex justify-center md:justify-center max-w-175">

                        <div className="relative w-50 h-55 sm:w-55 sm:h-60 md:w-90 md:h-96 hex-float">

                            {/* 🌌 SOFT GLOW BACKGROUND */}
                            <div className="
                                    absolute inset-0
                                    bg-linear-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20
                                    blur-3xl
                                    clip-hexagon
                                    " />

                            {/* 🔷 BORDER FRAME */}
                            <div className="
                                    absolute inset-0
                                    p-0.5
                                    clip-hexagon
                                    bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500
                                    ">

                                {/* inner glass */}
                                <div className="
                                        w-full h-full
                                        clip-hexagon
                                        bg-black/50 backdrop-blur-xl
                                    " />
                            </div>

                            {/* 🖼️ IMAGE LAYER (IMPORTANT: clipped again) */}
                            <div className="
                                absolute inset-0
                                clip-hexagon
                                overflow-hidden
                                ">

                                <img
                                    src="/pfm3.png"
                                    alt="profile"
                                    className="
                                        w-full h-full object-cover 
                                        object-cover object-[50%_25%] 
                                        "
                                />

                                {/* subtle cinematic shading */}
                                <div className="
                                    absolute inset-0
                                    bg-linear-to-t from-black/40 via-transparent to-black/20
                                " />
                            </div>

                        </div>
                    </div>
                    {/* 🧊 RIGHT HEXAGON IMAGE */}

                    <div className="flex-1 text-center md:text-left">

                        <h1 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[55px] 2xl:text-6xl font-bold text-white leading-tight">
                            I Build Scalable{" "}
                            <span className="text-cyan-400">Next.js Systems</span> &{" "}
                            <span className="text-purple-400">AI Automation Workflows</span>
                        </h1>

                        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] mt-5 text-white/70  md: ">
                            I am a Full Stack Developer focused on building production-ready web applications
                            using Next.js, MERN stack, and modern AI automation tools. I help businesses
                            turn ideas into scalable digital systems.
                        </p>

                        {/* credibility line (important for freelancer positioning) */}
                        <p className="text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[17px] 2xl:text-[19px] mt-2 text-white/50 ">
                            Specialized in Next.js • MERN Stack • AI Automation • DevOps Fundamentals
                        </p>

                        <div className="mt-4 flex gap-4 justify-center md:justify-start">

                            <button className="px-3 md:px-6 py-2 md:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition" onClick={() => {
                                router.push("/projects")
                            }}>
                                View Projects
                            </button>

                            <button className="px-3 md:px-6 py-2 md:py-3 rounded-full bg-linear-to-r from-cyan-500 to-purple-500 text-black font-semibold hover:opacity-90 transition" onClick={() => {
                                router.push("/#contact")
                            }}>
                                Contact Me
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;