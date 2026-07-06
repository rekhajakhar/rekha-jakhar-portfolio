import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-border p-6 transition-colors hover:border-accent"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-sm text-muted">{project.timeframe}</p>
        </div>
        <ArrowUpRight
          size={20}
          className="shrink-0 text-muted transition-colors group-hover:text-accent"
        />
      </div>

      <p className="text-sm font-medium text-accent">
        {project.headlineMetric}
      </p>

      <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-muted-background px-2.5 py-1 text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
