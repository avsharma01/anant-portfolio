import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Badges from "./components/Badges";
import Certificates from "./components/Certificates";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Skills from "./components/Skills";




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
