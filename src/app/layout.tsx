import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Gabriele Boni – Backend Developer",
    description:
        "Gabriele Boni's portfolio: backend development, scalable architectures, microservices, and cloud integrations.",
    openGraph: {
        title: "Gabriele Boni – Backend Developer",
        description:
            "Portfolio of backend and full-stack projects: high-traffic systems, microservices, integrations with cloud services.",
        siteName: "Gabriele Boni – Portfolio",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Gabriele Boni – Backend Developer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
                <ThemeProvider>
                    {children}
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    );
}
