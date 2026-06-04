import type { ReactNode } from "react";
import type { Content } from "@/data/content";
import { Logo } from "@/components/ui/Logo";

interface FooterProps {
  t: Content;
}

export function Footer({ t }: FooterProps) {
  const f = t.footer;

  return (
    <footer className="bg-teal text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="rounded-xl bg-white/95 p-2 inline-block">
              <Logo height={32} />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/80">
              {f.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-cream/60">
              {f.product}
            </h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#funcionalidades">{f.links.features}</FooterLink>
              <FooterLink href="#planes">{f.links.pricing}</FooterLink>
              <FooterLink href="#contacto">{f.links.demo}</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-cream/60">
              {f.legal}
            </h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#">{f.links.privacy}</FooterLink>
              <FooterLink href="#">{f.links.terms}</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6 text-center text-xs text-cream/60">
          {f.rights}
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-cream/85 transition-colors hover:text-white"
      >
        {children}
      </a>
    </li>
  );
}
