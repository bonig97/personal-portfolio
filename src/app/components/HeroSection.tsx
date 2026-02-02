"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-cyan-600/10 to-blue-600/10 dark:from-emerald-500/20 dark:via-cyan-500/20 dark:to-blue-500/20" />

            <div
                className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-40"
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,transparent)]" />
            </div>

            <div className="relative z-10 max-w-4xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-background/80 dark:bg-background/60 backdrop-blur-xl rounded-2xl border border-foreground/10 px-5 py-6 sm:px-8 sm:py-7 shadow-lg"
                >
                    <div className="flex items-center gap-2 mb-5">
                        <span className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="w-3 h-3 rounded-full bg-amber-400" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>

                    <div className="font-mono text-sm sm:text-base space-y-3">
                        <p className="text-emerald-600 dark:text-emerald-400">
                            $ whoami
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-1 mb-3 text-foreground">
                            Gabriele Boni
                        </h1>
                        <p className="text-foreground/70">
                            Full-stack developer with a focus on backend, high-traffic systems, and integrations with cloud services.
                        </p>

                        <p className="text-emerald-600 dark:text-emerald-400 pt-2">
                            $ skills
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                            {[
                                "Node.js",
                                "PHP",
                                "TypeScript",
                                "Java",
                                "AWS",
                                "Docker",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-md border border-emerald-500/30 bg-emerald-500/5 text-emerald-800 dark:text-emerald-200"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
