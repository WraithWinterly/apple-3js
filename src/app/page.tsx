import IguanaSection from "~/components/sections/iguana-section";
import FeaturesSection from "~/components/sections/features-section";
import Footer from "~/components/layout/footer";
import HeroSection from "~/components/sections/hero-section";
import HighlightsSection from "~/components/sections/highlights-section";
import A17ChipSection from "~/components/sections/a17-chip-section";
import PhoneModelSection from "~/components/sections/phone-model-section";
import Header from "~/components/layout/header";
import ProLensesSection from "~/components/sections/pro-lenses-section";
import Camera48Section from "~/components/sections/camera-48-section";
import TelephotoSection from "~/components/sections/telephoto-section";
import VisionProSection from "~/components/sections/vision-pro-section";
import ActionButtonSection from "~/components/sections/action-button-section";

export default function HomePage() {
  return (
    <main className="bg-black">
      <Header />
      <HeroSection />
      <HighlightsSection />
      <PhoneModelSection />
      <FeaturesSection />
      <A17ChipSection />
      <IguanaSection />
      <ProLensesSection />
      <Camera48Section />
      <VisionProSection />
      <TelephotoSection />
      <ActionButtonSection />
      <Footer />
    </main>
  );
}
