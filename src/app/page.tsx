import IguanaSection from "~/components/sections/iguana-section";
import FeaturesSection from "~/components/sections/features-section";
import Footer from "~/components/layout/footer";
import HeroSection from "~/components/sections/hero-section";
import Highlights from "~/components/sections/highlights-section";
import A17ChipSection from "~/components/sections/a17-chip-section";
import PhoneModelSection from "~/components/sections/phone-model-section";
import Header from "~/components/layout/header";
import ProLensesSection from "~/components/sections/pro-lenses-section";

export default function HomePage() {
  return (
    <main className="bg-black">
      <Header />
      <HeroSection />
      <Highlights />
      <PhoneModelSection />
      <FeaturesSection />
      <A17ChipSection />
      <IguanaSection />
      <ProLensesSection />
      <Footer />
    </main>
  );
}
