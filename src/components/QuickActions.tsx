import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MapPin, TrendingUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const QuickActions = () => {
  const actions = [
    {
      icon: Brain,
      title: "Career Quiz",
      description: "Discover your ideal career path with our 5-minute aptitude test",
      cta: "Start Quiz",
      gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
      link: "/quiz"
    },
    {
      icon: MapPin,
      title: "Find Colleges",
      description: "Browse government colleges near you with filters and maps",
      cta: "Explore Colleges",
      gradient: "bg-gradient-to-br from-green-500 to-teal-600",
      link: "/colleges"
    },
    {
      icon: TrendingUp,
      title: "Career Pathways",
      description: "See where each degree leads and plan your future steps",
      cta: "View Paths",
      gradient: "bg-gradient-to-br from-orange-500 to-red-600",
      link: "/careers"
    },
    {
      icon: Heart,
      title: "Parent Guide",
      description: "Trusted information to help guide your child's education",
      cta: "Get Started",
      gradient: "bg-gradient-to-br from-pink-500 to-rose-600",
      link: "/parents"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to make informed decisions about higher education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-soft">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${action.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">{action.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-6 text-base">
                    {action.description}
                  </CardDescription>
                  <Link to={action.link}>
                    <Button variant="outline-primary" className="w-full">
                      {action.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;