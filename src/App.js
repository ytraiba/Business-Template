import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Article from "./components/Article";
import Teams from "./components/Teams";
import People from "./components/People";


export function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Article />
      <Contact />
    </div>
  );
}

export function Team() {
  return (
    <div>
      <Teams />
      <People />
    </div>
  );
} 


