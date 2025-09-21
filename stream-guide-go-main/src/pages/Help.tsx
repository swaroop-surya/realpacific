import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  BookOpen,
  HelpCircle,
  FileText,
  Users,
  Clock,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const Help = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          id: "1",
          question: "How do I take the career aptitude quiz?",
          answer: "Click on 'Take Quiz' from the homepage or navigation menu. The quiz takes about 5 minutes and consists of 25 questions about your interests, strengths, and preferences. Your results will show recommended career paths and college courses."
        },
        {
          id: "2", 
          question: "Is Pacific completely free to use?",
          answer: "Yes, Pacific is completely free for students, parents, and counselors. It's a government initiative to help students make informed education decisions. All features including the quiz, college directory, and resources are available at no cost."
        },
        {
          id: "3",
          question: "Do I need to create an account?",
          answer: "While you can browse colleges and take the quiz as a guest, creating an account lets you save your quiz results, bookmark colleges, track admission deadlines, and get personalized recommendations."
        }
      ]
    },
    {
      category: "College Search",
      questions: [
        {
          id: "4",
          question: "How do I find government colleges near me?",
          answer: "Use the 'Find Colleges' feature and either allow location access or manually select your district. You can filter results by course availability, hostel facilities, distance, and admission requirements."
        },
        {
          id: "5",
          question: "Are the college details accurate and up-to-date?",
          answer: "We work directly with state education departments to maintain accurate information. College details are updated regularly, but we recommend verifying critical information like admission dates and fees directly with the college."
        },
        {
          id: "6",
          question: "Can I compare multiple colleges?",
          answer: "Yes, you can save colleges to your profile and compare them side-by-side. This includes comparing courses offered, facilities, admission requirements, and locations."
        }
      ]
    },
    {
      category: "Career Guidance",
      questions: [
        {
          id: "7",
          question: "How accurate is the career quiz?",
          answer: "Our quiz is based on established career assessment methods and is regularly updated by education experts. While it provides valuable guidance, we recommend using it alongside counselor advice and your own research."
        },
        {
          id: "8",
          question: "What if I don't agree with my quiz results?",
          answer: "The quiz is a guide, not a final decision. You can retake it anytime, explore different career paths, and speak with counselors. Your interests and strengths may evolve, so revisiting the assessment periodically is helpful."
        },
        {
          id: "9",
          question: "Can I get personalized career counseling?",
          answer: "Pacific provides general guidance through the platform. For personalized counseling, you can contact our helpline or connect with certified counselors in your area through our partner network."
        }
      ]
    },
    {
      category: "Technical Issues",
      questions: [
        {
          id: "10",
          question: "The website is loading slowly. What should I do?",
          answer: "Pacific is designed to work on slow internet connections. Try refreshing the page, clearing your browser cache, or switching to a different browser. Most content is available offline once loaded."
        },
        {
          id: "11",
          question: "Can I use Pacific on my mobile phone?",
          answer: "Yes, Pacific is mobile-first and works great on smartphones and tablets. You can also install it as an app on your phone for offline access to saved content."
        },
        {
          id: "12",
          question: "I'm having trouble with the college map.",
          answer: "Ensure location services are enabled in your browser. If the map doesn't load, try switching to list view or manually selecting your district from the dropdown menu."
        }
      ]
    }
  ];

  const guides = [
    {
      title: "Complete Beginner's Guide to Pacific",
      description: "Everything you need to know to get started with Pacific",
      readTime: "5 min read",
      category: "Getting Started"
    },
    {
      title: "How to Choose the Right College",
      description: "Step-by-step guide to evaluating and selecting colleges",
      readTime: "8 min read", 
      category: "College Selection"
    },
    {
      title: "Understanding Your Career Quiz Results",
      description: "Make the most of your personalized career recommendations",
      readTime: "6 min read",
      category: "Career Planning"
    },
    {
      title: "Application Timeline and Deadlines",
      description: "Never miss important admission dates and requirements",
      readTime: "7 min read",
      category: "Admissions"
    }
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: "Phone Support", 
      description: "Toll-free helpline for immediate assistance",
      contact: "1800-123-4567",
      availability: "Mon-Sat 9 AM to 6 PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions and get detailed responses",
      contact: "help@pacific.in",
      availability: "Response within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Community Forum",
      description: "Connect with other students and get peer support",
      contact: "Join Discussion",
      availability: "24/7 community support"
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const filteredGuides = guides.filter(guide =>
    guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guide.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Help & Support
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Find answers to common questions and get the help you need
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((option, index) => (
            <Card key={index} className="text-center hover:shadow-soft transition-shadow">
              <CardHeader>
                <div className="mx-auto h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <option.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="font-medium">{option.contact}</div>
                  <div className="text-sm text-muted-foreground">{option.availability}</div>
                  <Button className="w-full mt-4">
                    {option.title === "Community Forum" ? "Join Forum" : "Contact Now"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Content Tabs */}
        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Guides
            </TabsTrigger>
          </TabsList>

          {/* FAQ Tab */}
          <TabsContent value="faq">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-8">
                {filteredFaqs.map((category) => (
                  <div key={category.category}>
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      {category.category}
                    </h3>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No FAQs found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or browse all categories
                </p>
              </div>
            )}
          </TabsContent>

          {/* Guides Tab */}
          <TabsContent value="guides">
            {filteredGuides.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredGuides.map((guide, index) => (
                  <Card key={index} className="hover:shadow-soft transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{guide.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {guide.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        <FileText className="h-4 w-4 mr-2" />
                        Read Guide
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No guides found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or browse all categories
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Still Need Help Section */}
        <Card className="mt-12">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Still need help?</CardTitle>
            <CardDescription>
              Our support team is here to assist you with any questions
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Support
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Help;