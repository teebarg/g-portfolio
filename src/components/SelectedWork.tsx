import { ArrowUpRight } from "lucide-react";

interface WorkItem {
   image?: string;
   name: string;
   role?: string;
   context?: string;
   problem?: string;
   outcome: string;
   impact?: string;
   stack?: string[];
   url?: string;
   year?: string;
}

const workItems: WorkItem[] = [
   {
      image: "bolsterImage.png",
      name: "Bolster Networks, Inc.",
      role: "Full-Stack Engineer",
      context: "Private equity portfolio operations platform",
      outcome: "Built a marketplace platform connecting C-level executives with portfolio companies for advisory and board roles.",
      impact: "Enabled structured executive matching, onboarding, and engagement across multiple portfolio companies.",
      stack: ["Python", "Vue.js", "PostgreSQL", "REST APIs"],
      url: "https://bolster.com/",
   },
   {
      image: "commerce.png",
      name: "Revogue Fashion",
      role: "Founder / Lead Engineer",
      context: "Production e-commerce platform",
      outcome: "Designed and built a high-performance e-commerce platform with advanced search, recommendations, and AI-assisted shopping.",
      impact: "Improved product discovery and conversion through Meilisearch, Redis caching, and vector-based recommendations.",
      stack: ["Next.js", "FastAPI", "PostgreSQL", "Meilisearch", "Redis", "Vector DB", "Paystack"],
      url: "https://www.revoque.com.ng",
   },
   {
      image: "pulse.png",
      name: "Pulse Metrics",
      role: "Founder / Backend Engineer",
      context: "B2B SaaS for e-commerce analytics",
      outcome: "Built a real-time analytics platform providing live insights into store performance and customer behavior.",
      impact: "Enabled merchants to monitor events, funnels, and anomalies in near real time.",
      stack: ["React(TanStack start)", "hono", "Redis", "Event Streams", "PostgreSQL"],
      url: "https://pulse.revoque.com.ng/",
   },
   {
      image: "super.PNG",
      name: "SupermartNG",
      role: "Backend Engineer",
      context: "Online grocery e-commerce platform",
      outcome: "Contributed to the backend architecture of a grocery e-commerce platform serving online customers.",
      impact: "Supported online ordering, inventory management, and checkout flows.",
      stack: ["Laravel", "PHP", "Vue.js", "Angular", "MySQL", "AWS", "Redis", "Paystack"],
      url: "https://www.supermart.ng/",
   },
   {
      name: "Real-Time Data Pipeline",
      role: "Backend / Data Engineer",
      problem: "Batch-based processing caused multi-hour data latency.",
      outcome: "Designed a streaming data pipeline reducing end-to-end latency to under 30 seconds.",
      impact: "Sustained throughput of 500k events per minute.",
      year: "2024",
   },
   {
      name: "Authentication Infrastructure",
      role: "Platform Engineer",
      problem: "Fragmented authentication across multiple microservices introduced security and operational risk.",
      outcome: "Built a unified SSO platform used across all services.",
      impact: "Served 50K+ monthly active users with improved security and maintainability.",
      year: "2023",
   },
];

const SelectedWork = () => {
   return (
      <section className="py-20 md:py-28 border-t border-border-subtle">
         <div className="container max-w-4xl">
            <div className="mb-12">
               <h2>Selected Work</h2>
               <p className="mt-3 text-text-secondary max-w-xl">Systems I've designed, built, or led. Focused on outcomes, not outputs.</p>
            </div>

            <div className="stagger-children space-y-1">
               {workItems.map((item, index) => (
                  <article
                     onClick={() => item.url && window.open(item.url, "_blank")}
                     key={index}
                     className="group py-6 border-b border-border-subtle last:border-b-0 cursor-pointer"
                  >
                     <div className="flex items-start justify-between gap-4">
                        {item.image && (
                           <div className="hidden sm:block shrink-0 w-32 h-24 rounded-lg overflow-hidden bg-secondary border border-divider">
                              <img
                                 src={item.image}
                                 alt={`${item.name} preview`}
                                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                              />
                           </div>
                        )}
                        <div className="flex-1 space-y-2">
                           <div className="flex items-center gap-3">
                              <h3 className="text-lg font-medium group-hover:text-text-secondary transition-colors">{item.name}</h3>
                              <ArrowUpRight className="h-4 w-4 text-text-tertiary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                           </div>
                           {/* Role & Context */}
                           {(item.role || item.context) && (
                              <p className="text-caption text-text-tertiary mb-2">
                                 {item.role}
                                 {item.role && item.context && " · "}
                                 {item.context}
                              </p>
                           )}

                           {item.problem && <p className="text-text-secondary mb-2">{item.problem}</p>}
                           <p className="text-text-tertiary text-sm">→ {item.outcome}</p>
                           {item.impact && <p className="text-caption text-primary/80 mb-3">↳ {item.impact}</p>}

                           {item.stack && item.stack.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                 {item.stack.map((tech) => (
                                    <span
                                       key={tech}
                                       className="px-2 py-0.5 text-xs font-mono bg-secondary text-text-secondary rounded border border-divider"
                                    >
                                       {tech}
                                    </span>
                                 ))}
                              </div>
                           )}
                        </div>
                        {item.year && <span className="text-text-tertiary text-sm font-medium shrink-0">{item.year}</span>}
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
};

export default SelectedWork;
