"use client";

import { LuGithub, LuLinkedin } from "react-icons/lu";
import { IoDownloadOutline } from "react-icons/io5";
import Link from "next/link";
export default function Navbar() {
    return (
        <header className="w-full">
            <div className="site-container flex items-center justify-between py-4 md:py-5">
                <h1 className="text-lg font-semibold md:text-xl">
                    salman <span className="main-color">/</span> dev
                </h1>
                <div className="flex items-center gap-4 md:gap-6">
                    <h5 className="hidden text-sm font-medium sm:block">Work</h5>
                    <h5 className="hidden text-sm font-medium sm:block">Stack</h5>
                    <div className="flex items-center gap-4">
                        <Link href="https://github.com/SalmannTariq">
                            <LuGithub className="main-color text-2xl" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/salmantariq05">
                            <LuLinkedin className="main-color text-2xl" />
                        </Link>
                    </div>
                    <Link href="/Salman Tariq - Resume.pdf" target="_blank">
                        <button
                        type="button"
                        className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-main-color px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-90 hover:bg-main-color/90"
                    >
                        <IoDownloadOutline className="text-lg" />
                        Resume
                    </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
