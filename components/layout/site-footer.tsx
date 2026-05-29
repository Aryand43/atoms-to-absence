import { profile } from "@/content/profile/bio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 text-sm text-muted">
        <p>
          {profile.name} · {profile.location}
        </p>
        <p className="text-xs">© {year}</p>
      </div>
    </footer>
  );
}
