import { education } from "@/data/education";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <Reveal>
        <SectionHeading eyebrow="Education" title="Academic background" />
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((entry, i) => (
          <Reveal key={entry.school} delay={i * 0.06}>
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-semibold">{entry.school}</h3>
              <p className="mt-1 text-sm text-muted">{entry.degree}</p>
              <p className="mt-3 text-sm text-muted">
                {entry.detail} · {entry.dates}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
