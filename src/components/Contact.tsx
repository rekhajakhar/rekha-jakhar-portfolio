import { Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <Reveal>
        <SectionHeading eyebrow="Contact" title="Let's talk" />
        <p className="max-w-2xl text-lg text-muted">
          Open to Senior/Staff Frontend Engineer roles. The fastest way to
          reach me is email.
        </p>
        <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-medium transition-colors hover:bg-muted-background"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-medium text-muted">
            <Phone size={16} />
            {profile.phone}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
