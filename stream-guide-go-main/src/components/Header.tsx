import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import pacificLogo from "@/assets/pacific-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center">
            <img src={pacificLogo} alt="Pacific Logo" className="h-10 w-10 rounded-full object-cover" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary">Pacific</h1>
            <p className="text-xs text-muted-foreground">Trusted Education Path</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="/quiz" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Take Quiz
          </a>
          <a href="/colleges" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Find Colleges
          </a>
          <a href="/careers" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Career Paths
          </a>
          <a href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact Us
          </a>
          <a href="/resources" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Resources
          </a>
          <a href="/help" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Help
          </a>
          <Button variant="outline-primary" size="sm" onClick={() => window.location.href = '/login'}>
            Login
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center h-10 w-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 px-4 space-y-3">
            <a href="/" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/quiz" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Take Quiz
            </a>
            <a href="/colleges" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Find Colleges
            </a>
            <a href="/careers" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Career Paths
            </a>
            <a href="/contact" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
            <a href="/resources" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Resources
            </a>
            <a href="/help" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Help
            </a>
            <Button variant="outline-primary" size="sm" className="w-full" onClick={() => window.location.href = '/login'}>
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;