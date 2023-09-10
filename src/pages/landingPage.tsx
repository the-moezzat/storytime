import Faq from "@/features/landing-page/faq";
import Footer from "@/features/landing-page/footer";
import Hero from "@/features/landing-page/hero";
import Pricing from "@/features/landing-page/pricing";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
