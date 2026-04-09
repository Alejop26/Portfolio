import "./styles/global.css";

import { DATA, NAV_IDS } from "./data/portfolio";
import { useScrollSpy, useRevealOnScroll, useSmoothScroll } from "./hooks";

import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import Ticker       from "./components/Ticker";
import Experience   from "./components/Experience";
import Skills       from "./components/Skills";
import Projects     from "./components/Projects";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";

export default function App() {
  const go     = useSmoothScroll();
  const active = useScrollSpy(NAV_IDS);
  useRevealOnScroll();

  return (
    <>
      {/* Navegación fija */}
      <Navbar name={DATA.name} active={active} go={go} />

      {/* Hero / Portada */}
      <Hero name={DATA.name} role={DATA.role} bio={DATA.bio} go={go} />

      {/* Franja animada */}
      <Ticker />

      {/* Secciones */}
      <Experience experience={DATA.experience} />
      <hr className="divider" />

      <Skills skills={DATA.skills} />
      <hr className="divider" />

      <Projects projects={DATA.projects} />
      <hr className="divider" />

      <Contact contact={DATA.contact} />

      {/* Pie de página */}
      <Footer name={DATA.name} />
      
    </>
  );
}
