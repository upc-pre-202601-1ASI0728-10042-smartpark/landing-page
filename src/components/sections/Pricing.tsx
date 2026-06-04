import type { Content } from "@/data/content";
import { PricingCard } from "@/components/ui/PricingCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface PricingProps {
  t: Content;
}

export function Pricing({ t }: PricingProps) {
  const p = t.pricing;

  return (
    <section className="bg-cream/40 py-16 sm:py-20" id="planes">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={p.title} subtitle={p.subtitle} />
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {p.plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              features={plan.features}
              cta={plan.cta}
              highlighted={"highlighted" in plan && plan.highlighted}
              popularLabel={p.popular}
              perMonth={p.perMonth}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
