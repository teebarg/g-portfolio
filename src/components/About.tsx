const About = () => {
   return (
      <section className="section-spacing border-t border-border-subtle py-20 md:py-32">
         <div className="container max-w-4xl">
            <h2 className="mb-6">About</h2>

            <div className="space-y-5 text-text-secondary leading-relaxed">
               <p>
                  I’m a software engineer with a strong focus on backend systems, product engineering, and building applications that perform reliably
                  in production. My work spans e-commerce platforms, real-time analytics, and marketplace systems, where I’ve taken ideas from early
                  architecture through deployment and iteration.
               </p>

               <p>
                  Over the past few years, I’ve worked across fintech and B2B platforms, contributing to systems that prioritize correctness,
                  scalability, and maintainability. More recently, I’ve been leading the development of Revoque — owning both technical decisions and
                  product execution.
               </p>

               <p>
                  I care deeply about clean system design, pragmatic engineering trade-offs, and building software that is easy to operate and evolve
                  over time.
               </p>
            </div>
         </div>
      </section>
   );
};

export default About;
