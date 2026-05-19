"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const pathname = usePathname();

    // ✅ navigation structure
    const navItems = [
        {
            name: "Home",
            href: "/",
            type: "route",
        },
        {
            name: "Ecosystem",
            href: "/ecosystem",
            type: "route",
        },
        {
            name: "Projects",
            href: "/projects",
            type: "route",
        },
        {
            name: "Certifications",
            href: "/certifications",
            type: "route",
        },
        {
            name: "Contact",
            href: "/#contact",
            type: "scroll",
        },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50">

            <div>
                <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">

                    {/* 🔥 LOGO */}
                    <Link href="/">
                        <h1 className="relative text-3xl font-extrabold tracking-wide cursor-pointer">

                            {/* glow */}
                            <span className="absolute inset-0 blur-xl opacity-60 bg-linear-to-r from-cyan-200 via-purple-300 to-pink-300" />

                            {/* logo */}
                            <span className="
                                relative z-10
                                bg-linear-to-r
                                from-cyan-500
                                via-purple-800
                                to-pink-800
                                text-transparent
                                bg-clip-text
                                drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]
                            ">
                                {`>_MU:/`}
                            </span>

                        </h1>
                    </Link>

                    {/* 🌫️ DESKTOP NAV */}
                    <nav className="hidden md:flex gap-3">

                        {navItems.map((item, i) => {

                            const isActive =
                                pathname === item.href;

                            return item.type === "route" ? (

                                <Link
                                    key={i}
                                    href={item.href}
                                    className={`
                                        relative px-5 py-2 text-sm font-medium text-white
                                        bg-white/5 backdrop-blur-sm
                                        border border-white/5
                                        rounded-full
                                        shadow-[0_5px_10px_rgb(0,0,0,0.2)]

                                        hover:bg-white/20
                                        hover:scale-105
                                        hover:border-white/30
                                        hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]

                                        transition-all duration-300

                                        ${isActive
                                            ? "bg-white/20 border-white/30"
                                            : ""
                                        }
                                    `}
                                >
                                    {item.name}
                                </Link>

                            ) : (

                                <a
                                    key={i}
                                    href={item.href}
                                    className="
                                        relative px-5 py-2 text-sm font-medium text-white
                                        bg-white/5 backdrop-blur-sm
                                        border border-white/5
                                        rounded-full
                                        shadow-[0_5px_10px_rgb(0,0,0,0.2)]

                                        hover:bg-white/20
                                        hover:scale-105
                                        hover:border-white/30
                                        hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]

                                        transition-all duration-300
                                    "
                                >
                                    {item.name}
                                </a>

                            );
                        })}

                    </nav>

                    {/* 📱 MOBILE BUTTON */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-white text-2xl"
                    >
                        {open ? "✕" : "☰"}
                    </button>

                </div>

                {/* 📱 MOBILE MENU */}
                {open && (
                    <div className="md:hidden px-5 pb-4">

                        <div className="flex flex-col gap-2">

                            {navItems.map((item, i) => {

                                return item.type === "route" ? (

                                    <Link
                                        key={i}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="
                                            px-4 py-3 rounded-xl text-white font-medium
                                            bg-white/5 backdrop-blur-xl
                                            border border-white/5
                                            shadow-sm
                                            hover:bg-white/20
                                            transition
                                        "
                                    >
                                        {item.name}
                                    </Link>

                                ) : (

                                    <a
                                        key={i}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="
                                            px-4 py-3 rounded-xl text-white font-medium
                                            bg-white/5 backdrop-blur-xl
                                            border border-white/5
                                            shadow-sm
                                            hover:bg-white/20
                                            transition
                                        "
                                    >
                                        {item.name}
                                    </a>

                                );
                            })}

                        </div>

                    </div>
                )}

            </div>

        </header>
    );
};

export default Navbar;