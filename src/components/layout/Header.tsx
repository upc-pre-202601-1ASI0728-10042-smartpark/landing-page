import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { Content, Locale } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { PANEL_URL } from "@/config";

interface HeaderProps {
  t: Content;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function Header({ t, locale, onLocaleChange }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#funcionalidades", label: t.nav.features },
    { href: "#planes", label: t.nav.pricing },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-teal/8 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo height={60} />

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Principal"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-coral"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle locale={locale} onChange={onLocaleChange} />
          <Button variant="outline" href={PANEL_URL} external className="!px-4 !py-2 text-sm">
            {t.nav.login}
          </Button>
          <Button variant="coral" href="#contacto" className="!px-4 !py-2 text-sm">
            {t.nav.cta}
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-teal md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-teal/8 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Móvil">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-teal"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline" href={PANEL_URL} external fullWidth className="text-sm">
              {t.nav.login}
            </Button>
            <Button variant="coral" href="#contacto" fullWidth className="text-sm">
              {t.nav.cta}
            </Button>
            <div className="mt-1">
              <LanguageToggle locale={locale} onChange={onLocaleChange} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function LanguageToggle({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (l: Locale) => void;
}) {
  return (
    <div
      className="flex rounded-lg border border-teal/15 bg-cream/40 p-0.5 text-xs font-semibold"
      role="group"
      aria-label="Idioma"
    >
      {(["es", "en"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => onChange(lang)}
          className={[
            "rounded-md px-2.5 py-1 uppercase transition-colors",
            locale === lang
              ? "bg-teal text-white shadow-sm"
              : "text-slate hover:text-teal",
          ].join(" ")}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
