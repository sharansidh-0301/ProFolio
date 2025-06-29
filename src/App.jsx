import { Bg } from "./components/Bg.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { Home } from "./components/Home.jsx";
import { Tech } from "./components/Tech.jsx";
import { ProjectSection } from "./components/ProjectSection.jsx";
import "./App.css";
import { Footer } from "./components/Footer.jsx";
import { About } from "./components/About.jsx";
import { Achievements } from "./components/Achievements.jsx";
import { Certifications } from "./components/Certifications.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Bg />
      <main className="  mx-auto ">
        {/* Home & About Section */}
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 lg:my-10 lg:ml-10 flex justify-center ">
            <Home />
          </div>
          <div className="w-full lg:w-1/2 lg:mr-20 lg:my-30 flex justify-center">
            <About />
          </div>
        </section>

        {/* Tech Section */}
        <section id="tech" className="mt-10 sm:mt-12 md:mt-16">
          <Tech />
        </section>

        {/* Projects Section */}
        <section id="project" className="mt-10 sm:mt-12 md:mt-16">
          <ProjectSection />
        </section>
        <section id="achievements">
         <Achievements/>
        </section>
       
       <section id="certifications" className="mt-10 sm:mt-12 md:mt-16"> 
        <Certifications/>
       </section>
        
        {/* Footer Section */}
        <section id="footer" className="mt-100">
          <Footer />
        </section>
      </main>
      
    </>
  );
}

export default App;
