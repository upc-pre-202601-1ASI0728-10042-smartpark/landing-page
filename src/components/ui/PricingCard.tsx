import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PricingCardProps {
  name: string;
  price: string;
  features: readonly string[];
  cta: string;
  highlighted?: boolean;
  popularLabel?: string;
  perMonth: string;
}

export function PricingCard({
  name,
  price,
  features,
  cta,
  highlighted,
  popularLabel,
  perMonth,
}: PricingCardProps) {
  return (
    <article
      className={[
        "relative flex flex-col rounded-2xl p-8 transition-all duration-300",
        highlighted
          ? "scale-[1.02] bg-teal text-white shadow-xl shadow-teal/30 ring-2 ring-coral/40"
          : "border border-teal/10 bg-white shadow-sm hover:shadow-md",
      ].join(" ")}
    >
      {highlighted && popularLabel && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-1 text-xs font-semibold text-white shadow-md">
          {popularLabel}
        </span>
      )}
      <h3
        className={[
          "text-lg font-semibold",
          highlighted ? "text-cream" : "text-teal",
        ].join(" ")}
      >
        {name}
      </h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-sm font-medium opacity-80">USD</span>
        <span className="text-4xl font-bold tracking-tight">{price}</span>
        <span
          className={[
            "text-sm",
            highlighted ? "text-cream/80" : "text-slate",
          ].join(" ")}
        >
          {perMonth}
        </span>
      </div>
      <ul className="mt-8 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check
              className={[
                "mt-0.5 h-4 w-4 shrink-0",
                highlighted ? "text-coral" : "text-slate",
              ].join(" ")}
            />
            <span className={highlighted ? "text-cream/95" : "text-ink/80"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? "cream" : "primary"}
        fullWidth
        className="mt-8"
      >
        {cta}
      </Button>
    </article>
  );
}
