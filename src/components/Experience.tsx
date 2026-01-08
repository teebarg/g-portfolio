import BgCodeDesign from "./BgCodeDesign";

interface ExperienceItem {
   role: string;
   company: string;
   period: string;
   scope: string;
}

const experiences: ExperienceItem[] = [
   {
      role: "Founder / Lead Engineer",
      company: "Revoque",
      period: "2024 — Present",
      scope: "Leading end-to-end architecture and development of a production e-commerce platform. Built high-performance search, caching, recommendations, and payment systems using Next.js, FastAPI, PostgreSQL, Redis, and vector databases.",
   },
   {
      role: "Software Engineer",
      company: "Bolster Networks",
      period: "2021 — 2024",
      scope: "Built and maintained a marketplace platform connecting executives with private equity portfolio companies. Worked across backend services and frontend features to support onboarding, matching, and engagement workflows.",
   },
   {
      role: "Software Engineer/ Technical Lead",
      company: "Altara Credit",
      period: "2020 — 2023",
      scope: "Worked on backend systems supporting consumer lending products. Contributed to API development, data workflows, and system reliability in a regulated fintech environment.",
   },
   {
      role: "Software Engineer",
      company: "SupermartNG",
      period: "2018 — 2020",
      scope: "Worked on backend services for an online grocery platform, supporting ordering, inventory, and checkout flows using Laravel and Vue.js.",
   },
];

const Experience = () => {
   return (
      <section className="py-20 md:py-28 border-t border-border-subtle relative">
         <BgCodeDesign />
         <div className="container max-w-4xl">
            <div className="mb-12">
               <h2>Experience</h2>
               <p className="mt-3 text-text-secondary max-w-xl">
                  A progression from full-stack development to product ownership and scalable backend systems.
               </p>
            </div>
            <div className="relative">
               {/* Timeline line */}
               <div className="absolute left-0 top-0 bottom-0 w-px bg-divider hidden md:block" />

               <div className="space-y-0">
                  {experiences.map((exp) => (
                     <article key={`${exp.company}-${exp.role}`} className="relative md:pl-8 py-6 border-b border-divider last:border-b-0">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-8 w-2 h-2 bg-foreground rounded-full -translate-x-[3px] hidden md:block" />

                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-4 mb-2">
                           <div>
                              <h3 className="text-base font-medium text-foreground">{exp.role}</h3>
                              <p className="text-text-secondary text-sm">{exp.company}</p>
                           </div>
                           <span className="text-text-tertiary text-sm">{exp.period}</span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed md:ml-0">{exp.scope}</p>
                     </article>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Experience;
