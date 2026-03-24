import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Download, Menu, Sparkle } from "lucide-react";
import icon from "@/assets/icon.png";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={icon}
              alt="Remi Logo"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-xl font-bold font-rounded">remi</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8"></div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              className="bg-primary hover:bg-primary/90 rounded-full shadow-sm hover:shadow-md transition-all duration-300 font-rounded text-white"
              onClick={() => {
                scrollToSection("showcase");
              }}
            >
              <Sparkle className="h-4 w-4 mr-2" />
              Get Remi
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t bg-background/95 backdrop-blur-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 space-y-3">
              <div className="px-4 pt-2 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium font-rounded">Theme</span>
                  <ThemeToggle />
                </div>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 rounded-full font-rounded text-white"
                  onClick={() => {
                    const footer = document.querySelector("footer");
                    if (footer) {
                      footer.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Get Remi
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
