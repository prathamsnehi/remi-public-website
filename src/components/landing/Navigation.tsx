import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Download, Menu, Sparkle } from "lucide-react";
import icon from "@/assets/icon.png";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If not on the homepage, go home first, then scroll (or just go to the link logic if needed)
    // For now we'll just handle it gracefully
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
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
          <Link to="/">
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/support">
              <Button
                variant="outline"
                className="rounded-full shadow-sm hover:shadow-md transition-[box-shadow,transform] duration-300 font-rounded"
              >
                Support
              </Button>
            </Link>
            <Button
              className="bg-primary hover:bg-primary/90 rounded-full shadow-sm hover:shadow-md transition-[box-shadow,transform] duration-300 font-rounded text-white"
              onClick={() => {
                scrollToSection("cta");
              }}
            >
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
            className="md:hidden border-t bg-background/95 backdrop-blur-sm shadow-xl rounded-b-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 px-4 space-y-3">
              <div className="flex items-center justify-between mx-2">
                <span className="text-sm font-medium font-rounded">Theme</span>
                <ThemeToggle />
              </div>
              <div className="space-y-3 pt-2">
                <Link to="/support" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full rounded-full shadow-sm hover:shadow-md transition-[box-shadow,transform] duration-300 font-rounded mb-3"
                  >
                    Support
                  </Button>
                </Link>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 shadow-md rounded-full font-rounded text-white"
                  onClick={() => {
                    scrollToSection("cta");
                  }}
                >
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
