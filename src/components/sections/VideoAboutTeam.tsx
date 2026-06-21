import type { Content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface VideoAboutTeamProps {
  t: Content;
}

/**
 * Sección "About the Team": embebe el video del equipo de SmartPark
 * (alojado en YouTube), que resume el proceso de trabajo y los testimonios.
 */
export function VideoAboutTeam({ t }: VideoAboutTeamProps) {
  const v = t.videoTeam;

  return (
    <section className="bg-cream py-16 sm:py-20" id="equipo">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={v.title} subtitle={v.subtitle} />
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-teal/10 shadow-xl ring-1 ring-black/5">
          <div className="aspect-video bg-black">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/cg5wAB2AWpw"
              title="SmartPark — Video About the Team"
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
