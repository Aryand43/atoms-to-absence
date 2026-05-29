import Link from "next/link";
import { profile } from "@/content/profile/bio";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#research", label: "Research" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-medium tracking-wide text-foreground transition-colors hover:text-accent"
        >
          {profile.name}
        </Link>
        <nav className="flex items-center gap-6" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
