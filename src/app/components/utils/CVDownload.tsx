"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type CvVariant = "EU" | "CH";

function detectDefaultVariant(): CvVariant {
    if (typeof navigator === "undefined") {
        return "EU";
    }

    const lang = navigator.language.toLowerCase();

    if (lang.endsWith("-ch")) {
        return "CH";
    }

    return "EU";
}

export default function CvDownload() {
    const [variant, setVariant] = useState<CvVariant>("EU");

    useEffect(() => {
        const stored = localStorage.getItem("cv-variant") as CvVariant | null;

        if (stored === "EU" || stored === "CH") {
            setVariant(stored);

            return;
        }

        const detected = detectDefaultVariant();
        setVariant(detected);
    }, []);

    useEffect(() => {
        localStorage.setItem("cv-variant", variant);
    }, [variant]);

    const href = useMemo(() => {
        return variant === "EU"
            ? "/Boni_Gabriele_-_CV_(EU).pdf"
            : "/Boni_Gabriele_-_CV_(CH).pdf";
    }, [variant]);

    return (
        <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-3">
                <span className="text-sm text-foreground/60">Market:</span>
                <div className="inline-flex rounded-lg border border-foreground/10 bg-background/70 overflow-hidden shadow-sm">
                    <button
                        type="button"
                        onClick={() => setVariant("EU")}
                        className={`px-4 py-2 text-sm font-medium transition ${
                            variant === "EU"
                                ? "bg-foreground/10 text-foreground"
                                : "text-foreground/70 hover:bg-foreground/5"
                        }`}
                    >
                        EU
                    </button>
                    <button
                        type="button"
                        onClick={() => setVariant("CH")}
                        className={`px-4 py-2 text-sm font-medium transition ${
                            variant === "CH"
                                ? "bg-foreground/10 text-foreground"
                                : "text-foreground/70 hover:bg-foreground/5"
                        }`}
                    >
                        CH
                    </button>
                </div>
            </div>
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="
                    inline-flex items-center justify-center gap-2
                    px-6 py-3
                    rounded-lg
                    bg-green-500/15
                    text-green-700 dark:text-green-400
                    border border-green-500/30
                    hover:bg-green-500/25
                    transition-colors
                    font-medium
                    shadow-sm
                  "
            >
                Download Resume ({variant})
            </motion.a>
        </div>
    );
}
