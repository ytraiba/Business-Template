import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import People from "./components/People";


export function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <People />
      <Article />
      <Contact />
    </div>
  );
}



