import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickActions from "@/components/QuickActions";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <QuickActions />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
