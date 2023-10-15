import Faq from "@/features/landing-page/faq";
import Features from "@/features/landing-page/features";
import Footer from "@/features/landing-page/footer";
import Hero from "@/features/landing-page/hero";
import Pricing from "@/features/landing-page/pricing";

export default function LandingPage() {
  return (
    <div className="mx-auto max-w-[1480px]">
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
