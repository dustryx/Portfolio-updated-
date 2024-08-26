import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect/dist/core";
import "./Home.css";
import Footer from "../components/Footer";
import HeroImage from "../assets/Late_night_work_at_home__-removebg-preview.png";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";

function Home() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: "> Alex Karanja",
        autoStart: true,
        delay: 100,
        loop: true,
        pauseFor: 3000,
      });
    }
  }, []);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main
        id="home"
        className="hero-section flex flex-col md:flex-row justify-between ml-8 md:ml-28 mr-8 md:mr-10 mt-16"
      >
        <div className="mb-8 md:mb-0">
          <h2>Hello, I am</h2>
          <h1 className="text-green-800" id="typewriter-name" ref={typewriterRef}></h1>
          <h3 className="description py-3 w-full md:w-3/4 font-semi-bold">
          As a developer with a solid foundation in backend systems, I thrive on crafting the architecture that powers seamless user experiences. While backend development is my primary strength, I’m continuously honing my frontend skills to achieve a balanced approach, ensuring every aspect of my projects is well-rounded and effective. ✨
          </h3>
          <a href="/Alex Karanja Resume.pdf" download="Alex Karanja Resume.pdf">
            <button className="rounded-full drop-shadow-lg">
              Download CV
            </button>
          </a>
        </div>
        <img src={HeroImage} alt="Hero" className="hero-image w-full md:w-auto ml-0" />
      </main>
      <div className="flex justify-center mt-8">
        <FontAwesomeIcon icon={faAngleDown} size="2x" bounce />
      </div>
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
