import { Bell, MapPin, QrCode, Wallet } from "lucide-react";
import type { Content } from "@/data/content";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

const icons = [MapPin, QrCode, Wallet, Bell];

interface DriverFeaturesProps {
  t: Content;
}

export function DriverFeatures({ t }: DriverFeaturesProps) {
  const section = t.drivers;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={section.title} subtitle={section.subtitle} />
        <div className="grid gap-5 sm:grid-cols-2">
          {section.items.map((item, index) => (
            <FeatureCard
              key={item.title}
              icon={icons[index] ?? MapPin}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
