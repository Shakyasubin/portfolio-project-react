import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      {/* <!-- Dark Mode Toggler --> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Hero />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

      {/* <!-- Hero Section --> */}
      {/* <Hero /> */}

      {/* <!-- Banner Section --> */}

      {/* <!-- Skills Section --> */}
      {/* <Skills /> */}

      {/* <!-- Projects Section --> */}
      {/* <Projects /> */}

      {/* <!-- About Me Section --> */}
      {/* <About /> */}

      {/* <!-- Contact Section --> */}
      {/* <Contact /> */}

      {/* <!-- Footer --> */}
    </>
  );
}

export default App;
