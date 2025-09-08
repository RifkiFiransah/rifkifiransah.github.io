import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certification from "./components/Certification";
import Download from "./components/Download";

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />
      <Hero />
      <About />
      <Download />
      <Projects />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}
