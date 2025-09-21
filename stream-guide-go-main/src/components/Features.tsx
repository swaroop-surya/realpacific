import { CheckCircle, Smartphone, Wifi, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Personalized Recommendations",
      description: "Get course and college suggestions tailored to your quiz results and location"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Works perfectly on any device, from smartphones to tablets and computers"
    },
    {
      icon: Wifi,
      title: "Works Offline",
      description: "Take quizzes and browse saved content even without internet connection"
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Used by students, parents, and counselors across multiple states"
    }
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Pacific?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built specifically for Indian students seeking quality government education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;