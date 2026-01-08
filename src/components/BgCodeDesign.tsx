const BgCodeDesign = () => {
   return (
      <>
         <div className="absolute inset-0 opacity-[0.03]">
            <div
               className="absolute inset-0"
               style={{
                  backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
                  backgroundSize: "60px 60px",
               }}
            />
         </div>

         <div className="absolute top-20 right-8 md:right-20 text-text-tertiary/20 font-mono text-xs hidden lg:block select-none">
            <pre className="leading-relaxed">
               {`const engineer = {
               focus: "scalable systems",
  products: "production-grade",
  mindset: "reliability-first",
};`}
            </pre>
         </div>
      </>
   );
};

export default BgCodeDesign;
