"use client";

import Image from "next/image";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { IoDownloadOutline } from "react-icons/io5";
import Link from "next/link";
import TechStack from "../components/techstack";
import Contact from "../components/contact";

const stats = [
    { label: "Experience", value: "1+ yr" },
    { label: "Shipped Projects", value: "5+" },
    { label: "Uptime", value: "99.9%" },
];

export default function LandingPage() {
    return (
        <main className="flex-1">
            <section id="hero" className="section-block">
                <div className="site-container">
                    <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-peach px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-main-color">
                                <span className="h-1.5 w-1.5 rounded-full bg-main-color" />
                                Open to full-time roles
                            </div>

                            <h1 className="max-w-xl text-[clamp(2.75rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-foreground">
                                I ship{" "}
                                <span className="text-main-color">full-stack</span> products.
                            </h1>
                            <p className="max-w-lg text-base leading-8 text-muted md:text-[17px]">
                                I&apos;m{" "}
                                <span className="font-semibold text-foreground">Salman</span>, a
                                Full-Stack developer with a year of production experience. I build fast,
                                reliable web apps — from polished UI to deployed APIs — and I care
                                about shipping work that holds up in production.
                            </p>
                            <div className="flex flex-wrap items-center gap-3">
                                <Link href="/Salman Tariq - Resume.pdf" target="_blank">
                                    <button
                                        type="button"
                                        className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-main-color px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-90 hover:bg-main-color/90"
                                    >
                                        <IoDownloadOutline className="text-lg" />
                                        Download resume
                                    </button>
                                </Link>
                                <Link href="https://github.com/SalmannTariq" target="_blank">
                                    <button
                                        type="button"
                                        className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-border-light bg-white/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-white hover:border-main-color"
                                    >
                                        <LuGithub className="text-lg main-color" />
                                        GitHub
                                    </button>
                                </Link>
                                <Link href="https://www.linkedin.com/in/salmantariq05" target="_blank">
                                    <button
                                        type="button"
                                        className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-border-light bg-white/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-white hover:border-main-color"
                                    >
                                        <LuLinkedin className="text-lg main-color" />
                                        LinkedIn
                                    </button>
                                </Link>
                            </div>
                            <div className="grid grid-cols-3 gap-6 lg:gap-8">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="space-y-2">
                                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-light">
                                            {stat.label}
                                        </p>
                                        <p className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                                            {stat.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:justify-self-end">
                            <div className="w-fit bg-peach p-5 md:p-6">
                                <div className="relative aspect-[4/5] w-[280px] overflow-hidden border-2 border-[#c9a88a] bg-peach-dark sm:w-[320px]">
                                    <Image
                                        src="/formal-pic.jpeg"
                                        alt="Salman"
                                        fill
                                        priority
                                        sizes="(max-width: 640px) 280px, 320px"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <p className="mt-4 max-w-[320px] text-[10px] font-medium uppercase leading-relaxed tracking-[0.16em] text-muted-light">
                                    Salman — Open to remote
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TechStack />
            <Contact />
        </main>
    );
}
