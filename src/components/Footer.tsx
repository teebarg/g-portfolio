import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
   const links = [
      {
         label: "GitHub",
         href: "https://github.com/teebarg",
         icon: Github,
      },
      {
         label: "LinkedIn",
         href: "https://www.linkedin.com/in/adeniyi-aderounmu-b46724ba/",
         icon: Linkedin,
      },
      {
         label: "Email",
         href: "mailto:teebarg01@gmail.com",
         icon: Mail,
      },
   ];

   return (
      <footer className="py-12 md:py-16 border-t border-border-subtle">
         <div className="container max-w-4xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
               <p className="text-text-tertiary text-sm">© {new Date().getFullYear()} · Built with care</p>

               <nav className="flex items-center gap-6">
                  {links.map((link) => (
                     <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-foreground transition-colors flex items-center gap-2 text-sm"
                        aria-label={link.label}
                     >
                        <link.icon className="h-4 w-4" />
                        <span className="hidden sm:inline">{link.label}</span>
                     </a>
                  ))}
               </nav>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
