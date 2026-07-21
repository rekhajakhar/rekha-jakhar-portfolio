import { personalProjects, workProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work and personal projects"
        />
      </Reveal>
      <div className="space-y-12">
        <div>
          <h3 className="mb-6 text-lg font-semibold">Work projects</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-semibold">Personal projects</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {personalProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
