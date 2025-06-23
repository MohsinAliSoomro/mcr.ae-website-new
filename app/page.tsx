import { CardSection, ContactPreviewSection, PartnerSection, HeroSection } from './components';


export default function HomePage() {
  return (
    <main className="">

      {/* Hero Section */}
      <HeroSection />

      {/* Cards Section - directly below hero */}
      <CardSection />

      {/* Why/Partner Section */}
      <PartnerSection />

      {/* Contact Preview Section */}
      <ContactPreviewSection />


    </main>
  );
} 