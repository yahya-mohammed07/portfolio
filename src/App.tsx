import About from "./components/About/About";
import Contact from "./components/Contact/contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "1fr",
            gap: 10,
          }}
          className=""
        >
          <section
            id="section_about"
            className="flex justify-center items-center"
          >
            <About />
          </section>
          <section id="section_skills" className="text-center mt-28">
            <p className="md:text-4xl font-Roboto font-semibold text-gray-700 mt-5">
              Skills
            </p>
            <Skills />
          </section>
          <section id="section_project" className="text-center">
            <p className="md:text-4xl font-Roboto font-semibold text-gray-700 mt-5">
              Projects
            </p>
            <Projects />
          </section>
          <section id="section_contact" className="text-center mx-auto">
            <p className="md:text-4xl font-Roboto font-semibold text-gray-700 mt-5">
              Let's Contact and create something
            </p>{" "}
            <Contact />
          </section>
        </div>
      </main>

      <footer className="mx-auto text-center p-6">Yahya &copy;</footer>
    </>
  );
}

export default App;