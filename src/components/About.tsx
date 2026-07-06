import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="About" title="Who I am" />
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          {profile.summary}
        </p>
      </Reveal>
    </section>
  );
}
