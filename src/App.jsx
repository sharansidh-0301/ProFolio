import { Bg } from "./components/Bg.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { Home } from "./components/Home.jsx";
import { Tech } from "./components/Tech.jsx";
import { ReactSection } from "./components/ReactSection.jsx";
import "./App.css";
import { Footer } from "./components/Footer.jsx";
import { About } from "./components/About.jsx";
import { Achievements } from "./components/Achievements.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Bg />
      <main className=" pt-20 mx-auto ">
        
      <div className="text-red-900 text-center border-b-2 mx-auto w-40">Site Under Working</div>
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
          <ReactSection />
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
