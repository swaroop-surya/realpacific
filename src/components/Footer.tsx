import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pacific</h3>
                <p className="text-sm text-primary-foreground/80">Trusted Education Path</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Empowering students and families to make informed decisions about higher education 
              through government colleges and career guidance.
            </p>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>help@pacific.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1800-123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/quiz" className="hover:text-white transition-colors">Career Quiz</a></li>
              <li><a href="/colleges" className="hover:text-white transition-colors">Find Colleges</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Career Paths</a></li>
              <li><a href="/timeline" className="hover:text-white transition-colors">Admission Timeline</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/help" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/parents" className="hover:text-white transition-colors">Parent Guide</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">For Counselors</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Pacific. A government education initiative.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;