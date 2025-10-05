import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Urgency Banner */}
      <div style={{backgroundColor: '#FACC15'}} className="text-black py-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold">
            <Clock className="h-4 w-4 animate-pulse" />
            <span>⚡ LIMITED TIME:</span>
            <span className="font-bold">FREE £300 Automation Audit</span>
            <span className="hidden md:inline">- Only 5 spots left this month!</span>
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-2 h-6 px-3 text-xs bg-black text-white hover:bg-gray-800 border-black"
            >
              <span className="hidden sm:inline">Claim Now</span>
              <span className="sm:hidden">Claim</span>
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/zynkro_logo.png"
                alt="ZynkroSystems logo"
                className="h-8 w-auto"
                loading="eager"
                fetchPriority="high"
              />
              <span className="text-xl font-bold">
                <span className="text-white">Zynkro</span>
                <span style={{color: '#FACC15'}}>Systems</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`text-sm font-medium transition-colors ${
                  isActive("/services") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Services
              </Link>
              <Link
                to="/case-studies"
                className={`text-sm font-medium transition-colors ${
                  isActive("/case-studies") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className={`text-sm font-medium transition-colors ${
                  isActive("/blog") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Blog
              </Link>
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Free Audit</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-medium ${
                  isActive("/") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-medium ${
                  isActive("/services") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Services
              </Link>
              <Link
                to="/case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-medium ${
                  isActive("/case-studies") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-medium ${
                  isActive("/blog") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Blog
              </Link>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Free Audit
                </Link>
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t border-border z-40">
        <Button variant="cta" size="lg" className="w-full" asChild>
          <Link to="/contact">Book Free Audit (Worth £300)</Link>
        </Button>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-muted py-8 mt-16 mb-20 md:mb-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">ZynkroSystems Ltd</strong> · Building automated growth
              systems for small businesses
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <a href="mailto:support@zynkrosystems.com" className="hover:text-primary transition-colors">
                support@zynkrosystems.com
              </a>{" "}
              · Northampton, UK
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Free Audit</Link>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} ZynkroSystems Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
