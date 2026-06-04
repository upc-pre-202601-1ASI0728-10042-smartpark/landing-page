import {
  Lightbulb,
  Monitor,
  ShieldAlert,
  Zap,
} from "lucide-react";
import type { Content } from "@/data/content";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

const icons = [Monitor, Zap, ShieldAlert, Lightbulb];

interface OperatorFeaturesProps {
  t: Content;
}

export function OperatorFeatures({ t }: OperatorFeaturesProps) {
  const section = t.operators;

  return (
    <section
      className="bg-gradient-to-b from-white to-cream/30 py-16 sm:py-20"
      id="funcionalidades"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={section.title} subtitle={section.subtitle} />
        <div className="grid gap-5 sm:grid-cols-2">
          {section.items.map((item, index) => (
            <FeatureCard
              key={item.title}
              icon={icons[index] ?? Monitor}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
