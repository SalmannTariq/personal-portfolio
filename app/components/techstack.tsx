"use client";

import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiSocketdotio,
  SiJavascript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

type TechItem = {
  name: string;
  icon: IconType;
  color: string;
  level: number;
};

type StackCategory = {
  title: string;
  accent: string;
  description: string;
  items: TechItem[];
};

const stackCategories: StackCategory[] = [
  {
    title: "Frontend",
    accent: "#e45826",
    description: "Fast, polished interfaces",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB", level: 5 },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 5 },
      { name: "Javascript", icon: SiJavascript, color: "#E34F26", level: 5 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 4 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 5 },
    ],
  },
  {
    title: "Backend",
    accent: "#339933",
    description: "APIs that scale in production",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 5 },
      { name: "Express", icon: SiExpress, color: "#000000", level: 5 },
      { name: "Web Socket", icon: SiSocketdotio, color: "#010101", level: 5 },
    ],
  },
  {
    title: "Database & DevOps",
    accent: "#4169E1",
    description: "Data, version control & deploy",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 5 },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 4 },
      { name: "Git", icon: SiGit, color: "#F05032", level: 4 },
      { name: "Docker", icon: SiDocker, color: "#2496ED", level: 4 },
      { name: "AWS", icon: FaAws, color: "#FF9900", level: 4 },
    ],
  },
];

function tintBg(color: string, opacity = 0.14) {
  if (color === "#000000" || color === "#010101") return "rgba(26, 26, 26, 0.06)";
  const hex = color.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function SkillBar({ level, accent }: { level: number; accent: string }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="h-1 w-2.5 rounded-full transition-colors"
          style={{
            backgroundColor: i < level ? accent : "var(--border-light)",
          }}
        />
      ))}
    </div>
  );
}

function TechRow({
  name,
  icon: Icon,
  color,
  level,
  accent,
}: TechItem & { accent: string }) {
  return (
    <li className="group flex items-center gap-2.5 rounded-xl border border-transparent px-2 py-2 transition-all duration-200 hover:border-border-light hover:bg-white hover:shadow-[0_4px_16px_rgba(26,26,26,0.06)]">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-105">
        <Icon className="text-xl" style={{ color }} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-semibold text-foreground">{name}</p>
        <SkillBar level={level} accent={accent} />
      </div>
    </li>
  );
}

export default function TechStack() {
  const allTools = stackCategories.flatMap((c) => c.items);

  return (
    <section id="stack" className="section-block border-t border-border-light">
      <div className="site-container">
        <div className="section-header flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-main-color ring-1 ring-peach-dark/60">
              <span className="h-1.5 w-1.5 rounded-full bg-main-color" />
              Tech stack
            </div>
            <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-foreground md:text-4xl">
              Tools I use to{" "}
              <span className="text-main-color">ship products</span>
            </h2>
            <p className="text-sm leading-7 text-muted md:text-base">
              A flow from interface to infrastructure — the same stack that
              powers everything I build, end to end.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
            {allTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border-light/80 bg-white/90 px-2.5 py-1.5 text-[11px] font-medium text-foreground shadow-sm"
                >
                  <Icon className="text-sm" style={{ color: tool.color }} />
                  {tool.name}
                </span>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stackCategories.map((category) => (
            <div
              key={category.title}
              className="overflow-hidden rounded-2xl border border-border-light/90 bg-white/80 shadow-[0_8px_30px_rgba(26,26,26,0.05)] backdrop-blur-sm"
            >
              <div
                className="border-b border-border-light/80 px-5 py-4"
                style={{
                  background: `linear-gradient(135deg, ${tintBg(category.accent, 0.12)} 0%, rgba(255,255,255,0.9) 100%)`,
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-light">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {category.description}
                    </p>
                  </div>
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: category.accent }}
                  >
                    {category.items.length}
                  </span>
                </div>
                <div
                  className="mt-3 h-1 w-10 rounded-full"
                  style={{ backgroundColor: category.accent }}
                />
              </div>

              <div
                className={`grid gap-x-2 p-3 ${
                  category.items.length > 3 ? "grid-cols-2" : "grid-cols-1"
                }`}
              >
                <ul className="space-y-1">
                  {category.items.slice(0, 3).map((item) => (
                    <TechRow
                      key={item.name}
                      {...item}
                      accent={category.accent}
                    />
                  ))}
                </ul>
                {category.items.length > 3 && (
                  <ul className="space-y-1">
                    {category.items.slice(3).map((item) => (
                      <TechRow
                        key={item.name}
                        {...item}
                        accent={category.accent}
                      />
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
