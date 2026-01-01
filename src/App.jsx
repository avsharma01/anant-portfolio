import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
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
      <Experience />
      <Badges />
      <Certificates />
      <Leadership />
      <Contact />
    </div>
  );
}


export default App;
