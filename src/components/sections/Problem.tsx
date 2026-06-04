import { AlertTriangle, MapPinOff } from "lucide-react";
import type { Content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

const icons = [AlertTriangle, MapPinOff];

interface ProblemProps {
  t: Content;
}

export function Problem({ t }: ProblemProps) {
  const p = t.problem;

  return (
    <section className="bg-white py-16 sm:py-20" id="problema">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={p.title} />
        <div className="grid gap-6 md:grid-cols-2">
          {p.items.map((item, index) => {
            const Icon = icons[index] ?? AlertTriangle;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-teal/8 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-coral/10 p-3 text-coral">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-teal">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
