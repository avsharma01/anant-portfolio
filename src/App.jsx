import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Badges from "./components/Badges";
import Certificates from "./components/Certificates";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-darkbg min-h-screen text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Badges />
      <Certificates />
      <Leadership />
      <Contact />
    </div>
  );
}


export default App;
