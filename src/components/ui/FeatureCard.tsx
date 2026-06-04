import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="group rounded-2xl border border-teal/8 bg-white p-6 shadow-sm shadow-teal/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate/25 hover:shadow-md hover:shadow-teal/10">
      <div className="mb-4 inline-flex rounded-xl bg-cream/60 p-3 text-teal transition-colors group-hover:bg-coral/10 group-hover:text-coral">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <h3 className="mb-2 font-semibold text-teal">{title}</h3>
      <p className="text-sm leading-relaxed text-slate">{description}</p>
    </article>
  );
}
