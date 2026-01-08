import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Competencies from "@/components/Competencies";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Footer from "@/components/Footer";
import About from "@/components/About";

const Index = () => {
   return (
      <div className="min-h-screen bg-background">
         <Header />
         <main className="pt-16">
            <Hero />
            <section id="about">
               <About />
            </section>
            <section id="work">
               <SelectedWork />
            </section>
            <Competencies />
            {/* <section id="writing">
               <Writing />
            </section> */}
            <section id="experience">
               <Experience />
            </section>
            <Leadership />
         </main>
         <section id="contact">
            <Footer />
         </section>
      </div>
   );
};

export default Index;
