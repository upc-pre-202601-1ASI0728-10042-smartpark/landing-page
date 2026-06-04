import { Box, Download } from "lucide-react";
import type { Content } from "@/data/content";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  t: Content;
}

export function Hero({ t }: HeroProps) {
  const h = t.hero;

  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-slate/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-coral/8 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-teal sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]">
            {h.title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate sm:text-lg">
            {h.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button variant="primary">{h.ctaPrimary}</Button>
            <Button variant="secondary">
              <Download className="h-4 w-4" />
              {h.ctaSecondary}
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-3xl border border-white/80 bg-white p-8 shadow-xl shadow-teal/10 ring-1 ring-teal/5">
            <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-cream via-white to-slate/10">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-coral/10 blur-xl" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                  <Box className="h-12 w-12" strokeWidth={1.25} />
                </div>
              </div>
              <p className="mt-6 text-center text-sm font-medium text-slate">
                {h.visualLabel}
              </p>
              <div className="mt-4 flex gap-2">
                {[1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="h-1.5 w-8 rounded-full bg-teal/20"
                    style={{ opacity: 1 - i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="h-12 bg-white"
        style={{
          borderBottomLeftRadius: "3rem",
          borderBottomRightRadius: "3rem",
          marginTop: "-1px",
        }}
        aria-hidden
      />
    </section>
  );
}
