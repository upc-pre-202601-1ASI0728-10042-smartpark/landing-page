import type { Content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface VideoAboutProductProps {
  t: Content;
}

/**
 * Sección "About the Product": embebe el video promocional de SmartPark
 * (alojado en YouTube) para los visitantes de la landing.
 */
export function VideoAboutProduct({ t }: VideoAboutProductProps) {
  const v = t.video;

  return (
    <section className="bg-teal py-16 sm:py-20" id="video">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={v.title} subtitle={v.subtitle} light />
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-xl ring-1 ring-black/5">
          <div className="aspect-video bg-black">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/UtBEGuQRAC4"
              title="SmartPark — Video About the Product"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
