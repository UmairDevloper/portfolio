"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, ChangeEvent, FormEvent } from "react";
import DarkAmbientSection from "./layouts/DarkBg";

type ContactForm = {
    name: string;
    email: string;
    message: string;
};

type Status = "success" | "error" | null;

export default function ContactSection() {
    const [form, setForm] = useState<ContactForm>({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<Status>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                setStatus("error");
                return;
            }

            if (data.success) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }

        setLoading(false);
    };

    return (
        <DarkAmbientSection>
            <section
                id="contact"
                className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden"
            >
                {/* background */}
                <div className="absolute inset-0 bg-black" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.10),transparent_65%)]" />

                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                            Let’s Build{" "}
                            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
                                Something Meaningful
                            </span>
                        </h2>

                        <p className="mt-6 text-white/60 text-sm md:text-base max-w-xl">
                            Open to collaboration, freelance opportunities, scalable systems,
                            and AI automation projects.
                        </p>

                        <div className="mt-10 space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
                                    <FaEnvelope className="text-cyan-400" />
                                </div>

                                <div>
                                    <p className="text-white font-medium">Email</p>
                                    <p className="text-white/50 text-sm">
                                        m.umair.ullah01@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <a
                                    href="https://github.com/UmairDevloper"
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/10 transition"
                                >
                                    <FaGithub className="text-white text-lg" />
                                </a>

                                <a
                                    href="https://linkedin.com/in/umairullah"
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/10 transition"
                                >
                                    <FaLinkedin className="text-white text-lg" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative p-8 md:p-10 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white"
                            />

                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white"
                            />

                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Project Details"
                                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white resize-none"
                            />

                            {/* STATUS */}
                            {status === "success" && (
                                <p className="text-green-400 text-sm">
                                    Message sent successfully.
                                </p>
                            )}

                            {status === "error" && (
                                <p className="text-red-400 text-sm">
                                    Something went wrong. Try again.
                                </p>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={loading}
                                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </motion.button>

                        </form>
                    </motion.div>

                </div>
            </section>
        </DarkAmbientSection>
    );
}