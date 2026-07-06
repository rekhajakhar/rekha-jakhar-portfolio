import { experience } from "@/data/experience";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
      </Reveal>

      <div className="flex flex-col gap-12">
        {experience.map((entry, i) => (
          <Reveal key={entry.company} delay={i * 0.05}>
            <div className="grid gap-2 border-l-2 border-border pl-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-4">
              <div>
                <h3 className="text-lg font-semibold">{entry.company}</h3>
                <p className="text-sm text-muted">
                  {entry.title} · {entry.location}
                </p>
              </div>
              <p className="text-sm text-muted">{entry.dates}</p>
            </div>

            <div className="mt-4 border-l-2 border-border pl-6">
              {entry.intro && (
                <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted">
                  {entry.intro}
                </p>
              )}

              {entry.groups?.map((group) => (
                <div key={group.heading} className="mb-6 last:mb-0">
                  <h4 className="mb-2 text-sm font-semibold">
                    {group.heading}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {group.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {entry.bullets && (
                <ul className="flex flex-col gap-2">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
