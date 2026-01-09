import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
   return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border-subtle">
         <div className="container max-w-4xl">
            <div className="flex items-center justify-between h-16">
               <a href="/" className="font-bold text-foreground text-2xl">
                  Niyi
               </a>

               <nav className="hidden md:flex items-center gap-8">
                  <a href="#about" className="text-sm text-text-secondary hover:text-foreground transition-colors">
                     About
                  </a>
                  <a href="#work" className="text-sm text-text-secondary hover:text-foreground transition-colors">
                     Work
                  </a>
                  {/* <a href="#writing" className="text-sm text-text-secondary hover:text-foreground transition-colors">
                            Writing
                        </a> */}
                  <a href="#experience" className="text-sm text-text-secondary hover:text-foreground transition-colors">
                     Experience
                  </a>
                  <a href="#contact" className="text-sm text-text-secondary hover:text-foreground transition-colors">
                     Contact
                  </a>
               </nav>

               <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <Button variant="outline" size="sm" className="group text-sm" asChild>
                     <a href={import.meta.env.VITE_PDF_CV} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-3.5 w-3.5" />
                        Resume
                     </a>
                  </Button>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
