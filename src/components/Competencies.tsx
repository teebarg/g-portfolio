interface CompetencyGroup {
   title: string;
   items: string[];
}

const competencies: CompetencyGroup[] = [
   {
      title: "Backend Engineering",
      items: [
         "API design with FastAPI, Hono, Express.js and REST principles",
         "Asynchronous processing and background jobs",
         "Authentication and authorization systems",
         "Performance optimization and request lifecycle tuning",
      ],
   },
   {
      title: "Data & Caching",
      items: [
         "PostgreSQL data modeling and query optimization",
         "Redis caching strategies and session management",
         "Search indexing with Meilisearch",
         "Data consistency and transactional workflows",
      ],
   },
   {
      title: "Product Engineering",
      items: [
         "End-to-end system design for production products",
         "Frontend–backend integration with Next.js, React, and Vue.js",
         "Payment workflows and third-party integrations",
         "Iterative feature delivery and system evolution",
      ],
   },
   {
      title: "Technical Ownership",
      items: [
         "Architecture decisions and trade-off analysis",
         "Maintaining and evolving production systems",
         "Code quality, maintainability, and refactoring",
         "Debugging and resolving production issues",
      ],
   },
];

const Competencies = () => {
   return (
      <section className="py-20 md:py-28 bg-secondary/50">
         <div className="container max-w-4xl">
            <div className="mb-12">
               <h2>Core Competencies</h2>
               <p className="mt-3 text-text-secondary max-w-xl">Core areas of focus shaped by building and operating real production systems.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
               {competencies.map((group, index) => (
                  <div key={index} className="space-y-4">
                     <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
                     <ul className="space-y-2.5">
                        {group.items.map((item, itemIndex) => (
                           <li key={itemIndex} className="text-text-secondary text-sm flex items-start gap-2">
                              <span className="text-text-tertiary mt-1.5 h-1 w-1 rounded-full bg-current shrink-0" />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Competencies;
