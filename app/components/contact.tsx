"use client";

import Link from "next/link";
import { LuArrowUpRight, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { IoDownloadOutline } from "react-icons/io5";

const EMAIL = "salmantariq27.05@gmail.com";

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/SalmannTariq",
    href: "https://github.com/SalmannTariq",
    icon: LuGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/salmantariq05",
    href: "https://www.linkedin.com/in/salmantariq05",
    icon: LuLinkedin,
    external: true,
  },
  {
    label: "Résumé",
    value: "Download PDF",
    href: "/Salman Tariq - Resume.pdf",
    icon: IoDownloadOutline,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-block ">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-3xl border border-border-light/90 bg-white shadow-[0_20px_60px_rgba(26,26,26,0.06)]">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-main-color/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-peach blur-3xl" />

          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:p-14">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-peach px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-main-color">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-main-color" />
                Open to opportunities
              </div>

              <h2 className="max-w-lg text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground md:text-[2.75rem]">
                Have a product in mind?{" "}
                <span className="text-main-color">Let&apos;s ship it.</span>
              </h2>

              <p className="max-w-md text-base leading-7 text-muted">
                Whether it&apos;s a full product, a critical feature, or a
                production issue — I&apos;m open to freelance, contract, and
                full-time roles. Tell me what you&apos;re building.
              </p>

              <div className="inline-flex items-center gap-3 rounded-xl border border-border-light bg-background px-4 py-3">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-sm text-muted">
                  Typically responds within{" "}
                  <span className="font-semibold text-foreground">24 hours</span>
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <Link
                href={`mailto:${EMAIL}`}
                className="group block rounded-2xl border border-border-light bg-background p-5 transition-all hover:border-main-color/30 hover:shadow-[0_8px_24px_rgba(228,88,38,0.08)] md:p-6"
              >
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-light">
                  Primary contact
                </p>
                <p className="font-mono text-lg font-medium text-foreground underline decoration-border-light underline-offset-4 transition-colors group-hover:text-main-color group-hover:decoration-main-color/40 md:text-xl">
                  {EMAIL}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-main-color">
                  <LuMail className="text-base" />
                  Send an email
                  <LuArrowUpRight className="text-sm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3.5 rounded-xl border border-border-light/80 bg-white px-4 py-3.5 transition-all hover:border-main-color/25 hover:bg-peach/30"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-peach text-main-color transition-colors group-hover:bg-main-color group-hover:text-white">
                        <Icon className="text-lg" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-light">
                          {link.label}
                        </p>
                        <p className="truncate text-sm font-semibold text-foreground">
                          {link.value}
                        </p>
                      </div>
                      <LuArrowUpRight className="shrink-0 text-muted-light transition-all group-hover:text-main-color group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  );
                })}

                <Link
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-3.5 rounded-xl border border-main-color/20 bg-main-color px-4 py-3.5 text-white transition-all hover:bg-main-color/90 sm:col-span-2 lg:col-span-1 xl:col-span-2"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
                    <LuMail className="text-lg" />
                  </span>
                  <div className="flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
                      Quick action
                    </p>
                    <p className="text-sm font-semibold">Start a conversation</p>
                  </div>
                  <LuArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
