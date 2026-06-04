import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { DriverFeatures } from "@/components/sections/DriverFeatures";
import { Hero } from "@/components/sections/Hero";
import { OperatorFeatures } from "@/components/sections/OperatorFeatures";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { useLanguage } from "@/hooks/useLanguage";

export default function App() {
  const { locale, setLocale, t } = useLanguage("es");

  return (
    <>
      <Header t={t} locale={locale} onLocaleChange={setLocale} />
      <main>
        <Hero t={t} />
        <Problem t={t} />
        <OperatorFeatures t={t} />
        <DriverFeatures t={t} />
        <Pricing t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
