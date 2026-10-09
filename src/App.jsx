import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      {/* <!-- Dark Mode Toggler --> */}
      <input type="checkbox" name="" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>

        {/* <!-- NavBar Section --> */}
        <Navbar />

        {/* <!-- Hero Section --> */}
        <Hero />

        {/* <!-- Banner Section --> */}

        {/* <!-- Skills Section --> */}
        <Skills />

        {/* <!-- Projects Section --> */}
        <Projects />

        {/* <!-- About Me Section --> */}
        <About />

        {/* <!-- Contact Section --> */}
        <Contact />

        {/* <!-- Footer --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
