import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { workProjects, personalProjects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

const allProjects = [...workProjects, ...personalProjects];

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Rekha Jakhar`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Reveal>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <p className="mt-6 text-sm font-medium text-accent">
          {project.role} · {project.timeframe}
        </p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-4 text-lg font-medium text-accent">
          {project.headlineMetric}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-muted-background px-2.5 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
          >
            View live demo
            <ArrowUpRight size={16} />
          </a>
        ) : null}
      </Reveal>

      <Reveal delay={0.05} className="mt-10">
        <h2 className="text-lg font-semibold">The problem</h2>
        <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <h2 className="text-lg font-semibold">Approach</h2>
        <ul className="mt-3 flex flex-col gap-3">
          {project.approach.map((item) => (
            <li key={item} className="flex gap-2 leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.15} className="mt-10">
        <h2 className="text-lg font-semibold">Impact</h2>
        <ul className="mt-3 flex flex-col gap-3">
          {project.impact.map((item) => (
            <li key={item} className="flex gap-2 leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </article>
  );
}
