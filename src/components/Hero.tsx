import { ArrowRight, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import BgCodeDesign from "./BgCodeDesign";

const Hero = () => {
   return (
      <section className="section-spacing relative overflow-hidden min-h-[85vh] flex flex-col justify-center py-20 md:py-32">
         <BgCodeDesign />

         <div className="relative container max-w-4xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
               <div className="flex-1 order-2 lg:order-1">
                  <div className="animate-fade-in">
                     <p className="text-overline uppercase text-text-secondary mb-4 font-medium">Software Engineer · Product Builder</p>
                  </div>

                  <h1 className="mb-6 animate-fade-in">Building scalable systems and production-grade products.</h1>

                  <p className="max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed text-body-lg mb-10 animate-fade-in-delay-2">
                     I design and ship scalable systems and modern web products, with hands-on experience building e-commerce platforms, real-time
                     analytics, and marketplace applications.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-delay-3">
                     <Button
                        onClick={() =>
                           window.open(
                              "https://drive.google.com/file/d/1e-EGRTkMDXGtoL1Q84wYH7h9oYx6Ou2N/view?usp=sharing",
                              "_blank",
                              "noopener,noreferrer"
                           )
                        }
                        variant="default"
                        size="lg"
                        className="group"
                     >
                        <FileText className="mr-2 h-4 w-4" />
                        View CV
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                     </Button>
                     <Button onClick={() => window.open("mailto:teebarg01@gmail.com", "_blank", "noopener,noreferrer")} variant="outline" size="lg">
                        <Mail className="mr-2 h-4 w-4" />
                        Get in Touch
                     </Button>
                  </div>

                  <p className="mt-6 text-sm text-text-tertiary animate-fade-in-delay-3">
                     Currently building <span className="text-foreground font-medium">Revoque</span> — a modern e-commerce platform.
                  </p>
               </div>

               {/* Profile image */}
               <div className="order-1 lg:order-2 mb-10 lg:mb-0 animate-fade-in">
                  <div className="relative">
                     {/* Geometric frame accent */}
                     <div className="absolute -inset-3 border border-divider rounded-sm opacity-60" />
                     <div className="absolute -inset-6 border border-divider/40 rounded-sm hidden md:block" />

                     {/* Corner accents */}
                     <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-foreground/20" />
                     <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-foreground/20" />

                     {/* Image container */}
                     <div className="relative w-48 h-56 md:w-56 md:h-64 bg-secondary overflow-hidden">
                        <img
                           src="/niyi.jpg"
                           alt="Profile"
                           className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />

                        {/* Subtle overlay gradient */}
                        <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent" />
                     </div>

                     {/* Status indicator */}
                     <div className="absolute -bottom-2 -right-2 bg-background px-3 py-1.5 border border-divider">
                        <div className="flex items-center gap-2">
                           <span className="w-2 h-2 bg-green-500/80 rounded-full animate-pulse" />
                           <span className="text-overline text-text-tertiary uppercase">Available</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-16 pt-8 border-t border-divider animate-fade-in hidden md:block">
               <div className="flex items-center gap-8 text-text-tertiary">
                  <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-text-tertiary/30" />
                     <span className="text-caption font-mono">backend-systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-text-tertiary/30" />
                     <span className="text-caption font-mono">product-engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-text-tertiary/30" />
                     <span className="text-caption font-mono">performance & reliability</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
