import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Users, Code, Database, Palette, Mic } from "lucide-react";
import Header from "@/components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const teamMembers = [
    {
      name: "Swaroop Surya",
      role: "Team Leader & Full Stack Developer",
      description: "Experienced full stack developer with expertise in multiple technologies and team leadership.",
      icon: <Users className="h-6 w-6" />,
      color: "text-primary"
    },
    {
      name: "Akshay",
      role: "Full Stack Developer",
      description: "Skilled full stack developer specializing in modern web technologies and scalable solutions.",
      icon: <Code className="h-6 w-6" />,
      color: "text-accent"
    },
    {
      name: "Ramakrishna",
      role: "Researcher & Data Handling Specialist",
      description: "Expert researcher with advanced skills in data analysis, processing, and handling complex datasets.",
      icon: <Database className="h-6 w-6" />,
      color: "text-primary"
    },
    {
      name: "Divya",
      role: "Database Specialist",
      description: "Highly skilled database specialist with expertise in database design, optimization, and management.",
      icon: <Database className="h-6 w-6" />,
      color: "text-accent"
    },
    {
      name: "Bharathi",
      role: "UI/UX Designer",
      description: "Talented UI/UX designer creating beautiful and intuitive user experiences with exceptional design skills.",
      icon: <Palette className="h-6 w-6" />,
      color: "text-primary"
    },
    {
      name: "Teja",
      role: "Pitch Specialist & Communication Expert",
      description: "Excellent communication specialist with outstanding presentation and public speaking abilities.",
      icon: <Mic className="h-6 w-6" />,
      color: "text-accent"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - send to pacific@gmail.com
    console.log("Form submitted:", formData);
    alert("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Contact Pacific Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our dedicated team of professionals who are passionate about education and technology.
            </p>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="shadow-soft border-0 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-subtle flex items-center justify-center mx-auto mb-4 ${member.color}`}>
                        {member.icon}
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                      <p className="text-accent font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Email Us</h4>
                      <p className="text-muted-foreground">pacific@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Call Us</h4>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Visit Us</h4>
                      <p className="text-muted-foreground">Pacific Education Center<br />Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="What is this message about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    
                    <Button type="submit" variant="hero" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;