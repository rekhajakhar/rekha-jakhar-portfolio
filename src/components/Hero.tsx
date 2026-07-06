import { Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-20 pt-16 sm:pt-24">
      <Reveal>
        <p className="text-sm font-medium text-accent">
          {profile.title} · {profile.tagline}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="max-w-2xl text-lg text-muted">{profile.heroHook}</p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Mail size={16} />
            Contact
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted-background"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted-background"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}
