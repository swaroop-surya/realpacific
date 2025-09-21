import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Users, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const ParentGuide = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "Is graduation worth it for my child?",
      answer: "Yes! Government college graduates have 73% higher earning potential compared to Class 12 pass students. A degree opens doors to government jobs, private sector opportunities, and further education options."
    },
    {
      question: "How much does government college education cost?",
      answer: "Government colleges are highly affordable with fees ranging from ₹5,000-₹15,000 per year. Many scholarships are available for economically weaker sections, making quality education accessible to all."
    },
    {
      question: "What if my child doesn't know what to study?",
      answer: "Our career quiz helps identify your child's interests and aptitudes. Most students benefit from taking general courses like B.A., B.Sc., or B.Com which provide flexibility for future specialization."
    },
    {
      question: "Are government colleges really good quality?",
      answer: "Government colleges often have experienced faculty, good infrastructure, and strong industry connections. Many successful professionals are graduates of government institutions."
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Affordable Quality Education",
      description: "Government colleges offer excellent education at a fraction of private college costs"
    },
    {
      icon: "🎯",
      title: "Multiple Career Paths",
      description: "Every degree opens various career options in both government and private sectors"
    },
    {
      icon: "📚",
      title: "Skill Development",
      description: "Modern curriculum focuses on practical skills needed in today's job market"
    },
    {
      icon: "🌟",
      title: "Bright Future Prospects",
      description: "Government college graduates have better job security and growth opportunities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-2">
              A Guide for Parents
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know to support your child's educational journey
            </p>
          </div>

          {/* Quick Stats */}
          <Card className="shadow-soft border-0 mb-8 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">73%</div>
                  <p className="text-sm text-muted-foreground">Higher earning potential with degree</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">₹5-15K</div>
                  <p className="text-sm text-muted-foreground">Annual fees in government colleges</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <p className="text-sm text-muted-foreground">Students get jobs within 1 year</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="shadow-soft border-0 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                Why Choose Government College Education?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-2xl">{benefit.icon}</div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="shadow-soft border-0 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <h4 className="font-semibold text-primary mb-3 text-lg">{faq.question}</h4>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* How to Support Your Child */}
          <Card className="shadow-soft border-0 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                How You Can Support Your Child
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Encourage Exploration</h4>
                      <p className="text-sm text-muted-foreground">Let them take the career quiz and discuss the results together</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Visit Colleges Together</h4>
                      <p className="text-sm text-muted-foreground">Plan visits to nearby government colleges to see facilities</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Stay Informed</h4>
                      <p className="text-sm text-muted-foreground">Keep track of admission deadlines and scholarship opportunities</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Financial Planning</h4>
                      <p className="text-sm text-muted-foreground">Research scholarships and fee structures early</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Emotional Support</h4>
                      <p className="text-sm text-muted-foreground">Be patient and supportive during the decision-making process</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary text-sm font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Connect with Others</h4>
                      <p className="text-sm text-muted-foreground">Talk to other parents and alumni for insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="shadow-soft border-0 bg-muted/30">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Ready to Start Your Child's Educational Journey?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Begin with our career quiz to understand your child's interests and strengths. 
                  Then explore suitable colleges and courses together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" onClick={() => navigate('/quiz')}>
                    <BookOpen className="mr-2 h-5 w-5" />
                    Start Career Quiz
                  </Button>
                  <Button variant="outline-primary" size="lg" onClick={() => navigate('/colleges')}>
                    Explore Colleges
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="shadow-soft border-0 mt-8 border-l-4 border-l-accent">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Need Personal Guidance?</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Our counselors are available to help with specific questions about your child's future.
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Call:</span> 1800-123-4567 (Toll Free) | 
                    <span className="font-medium"> Email:</span> parents@pacific.in
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ParentGuide;