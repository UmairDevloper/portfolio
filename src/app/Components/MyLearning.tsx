import React from 'react'
import DarkAmbientSection from './layouts/DarkBg'

const MyLearning = () => {
    return (
        <DarkAmbientSection>
            <div>
                <section className="
                py-10 md:py-12 px-20 md:px-22 2xl:px-25 overflow-hidden rounded-3xl
                bg-white/6 backdrop-blur-lg
                border border-white/20 my-15 md:my-17">

                    {/* 🌌 Background Glow */}
                    <div className="
            absolute top-0 left-1/2 -translate-x-1/2
            w-[500px] h-[500px]
            bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10
            blur-3xl rounded-full
            pointer-events-none
        " />

                    {/* 🔥 SECTION HEADER */}
                    <div className=" text-center mb-14 md:mb-20 px-4">

                        <h2 className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                font-bold text-white leading-tight
            ">
                            Engineering{" "}
                            <span className="
                    bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500
                    text-transparent bg-clip-text
                ">
                                Mindset
                            </span>
                        </h2>

                        <p className="
                mt-4 md:mt-6
                text-white/60
                max-w-xs sm:max-w-xl md:max-w-2xl
                mx-auto
                text-sm sm:text-base md:text-lg
                leading-relaxed
            ">
                            My approach combines scalable engineering, rapid adaptation,
                            and building practical systems inspired by real-world problems.
                        </p>

                    </div>

                    {/* 🧊 CARDS GRID */}
                    <div className="
            relative z-10
            grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
            gap-8 lg:gap-8
        ">

                        {/* 🚀 CARD 1 */}
                        <div className="
                group
                p-6 md:p-8
                rounded-3xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                hover:bg-white/10
                hover:border-cyan-400/20
                transition-all duration-300
            ">

                            {/* ICON */}
                            <div className="
                    w-14 h-14 md:w-16 md:h-16
                    rounded-2xl
                    bg-gradient-to-r from-cyan-500 to-blue-500
                    flex items-center justify-center
                    text-2xl md:text-3xl
                    shadow-lg shadow-cyan-500/20
                ">
                                🚀
                            </div>

                            {/* TITLE */}
                            <h3 className="
                    mt-6
                    text-xl md:text-2xl
                    font-semibold text-white
                ">
                                Deployment-Focused Development
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="
                    mt-4
                    text-white/60
                    text-sm md:text-base
                    leading-relaxed
                ">
                                I build applications with production readiness in mind —
                                focusing on deployment workflows, scalability,
                                performance, and maintainable architecture instead
                                of just local development.
                            </p>

                        </div>

                        {/* ⚡ CARD 2 */}
                        <div className="
                group
                p-6 md:p-8
                rounded-3xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                hover:bg-white/10
                hover:border-purple-400/20
                transition-all duration-300
            ">

                            {/* ICON */}
                            <div className="
                    w-14 h-14 md:w-16 md:h-16
                    rounded-2xl
                    bg-gradient-to-r from-purple-500 to-pink-500
                    flex items-center justify-center
                    text-2xl md:text-3xl
                    shadow-lg shadow-purple-500/20
                ">
                                ⚡
                            </div>

                            {/* TITLE */}
                            <h3 className="
                    mt-6
                    text-xl md:text-2xl
                    font-semibold text-white
                ">
                                Rapid Technical Adaptation
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="
                    mt-4
                    text-white/60
                    text-sm md:text-base
                    leading-relaxed
                ">
                                I quickly adapt to modern technologies and workflows
                                by learning through implementation, experimentation,
                                and solving real engineering problems.
                            </p>

                        </div>

                        {/* 🧠 CARD 3 */}
                        <div className="
                group
                p-6 md:p-8
                rounded-3xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                hover:bg-white/10
                hover:border-pink-400/20
                transition-all duration-300
            ">

                            {/* ICON */}
                            <div className="
                    w-14 h-14 md:w-16 md:h-16
                    rounded-2xl
                    bg-gradient-to-r from-pink-500 to-orange-500
                    flex items-center justify-center
                    text-2xl md:text-3xl
                    shadow-lg shadow-pink-500/20
                ">
                                🧠
                            </div>

                            {/* TITLE */}
                            <h3 className="
                    mt-6
                    text-xl md:text-2xl
                    font-semibold text-white
                ">
                                Real-World Project Building
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="
                    mt-4
                    text-white/60
                    text-sm md:text-base
                    leading-relaxed
                ">
                                I focus on creating practical systems inspired by
                                real-world use cases — combining clean UI,
                                scalable backend architecture, automation,
                                and user-focused functionality.
                            </p>

                        </div>

                    </div>

                </section>
            </div>
        </DarkAmbientSection>
    )
}

export default MyLearning
