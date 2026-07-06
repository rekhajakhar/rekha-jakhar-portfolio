"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Download size={14} />
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 text-sm md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-muted transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-4 py-2 font-medium text-accent-foreground"
          >
            <Download size={14} />
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}
