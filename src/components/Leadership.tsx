const Leadership = () => {
   return (
      <section className="py-20 md:py-28 bg-secondary/50">
         <div className="container max-w-4xl">
            <div className="max-w-2xl space-y-6">
               <h2>Ownership & Technical Leadership</h2>

               <div className="space-y-4 text-text-secondary">
                  <p className="text-base leading-relaxed">
                     I take ownership of systems beyond implementation — from architectural decisions and trade-offs to long-term maintainability.
                     This includes designing systems that balance performance, simplicity, and future evolution.
                  </p>

                  <p className="text-base leading-relaxed">
                     In my work, I’ve driven technical direction, reviewed architecture and implementation choices, and collaborated closely with
                     product and business stakeholders. My focus is on building software that teams can operate, extend, and improve with confidence.
                  </p>
               </div>

               <div className="pt-4 grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                     <p className="text-foreground font-medium">End-to-end ownership</p>
                     <p className="text-text-tertiary">Architecture to production</p>
                  </div>
                  <div>
                     <p className="text-foreground font-medium">Technical decision-making</p>
                     <p className="text-text-tertiary">Trade-offs & system design</p>
                  </div>
                  <div>
                     <p className="text-foreground font-medium">Product collaboration</p>
                     <p className="text-text-tertiary">Engineering × business alignment</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Leadership;
