import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Students celebrating graduation with government college in background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container px-4 py-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Choose the right path after school — simple, local, trusted.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Free guidance to help students and parents pick streams, find government colleges nearby, and plan the next steps.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4" onClick={() => window.location.href = '/quiz'}>
              Take the 5-minute quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline-primary" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" onClick={() => window.location.href = '/parents'}>
              Guide my child
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">10,000+ Students Guided</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="text-sm">500+ Colleges Listed</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span className="text-sm">Government Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;