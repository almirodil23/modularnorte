import { useState } from "react";

import HomeHero from "./HomeHero";
import Intro from "./Intro";
import ProjectsPreview from "./ProjectsPreview";
import ParallaxBlock from "./ParallaxBlock";
import BlogSection from "../../components/BlogSection";
import ContactModal from "../ContactModal/ContactModal";

export default function Home() {
  const [modal, setModal] = useState(null);

  const closeModal = () => {
    setModal(null);
  };

  const openBudgetFromHero = () => {
    const section = document.getElementById(
      "home-contact-cta"
    );

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      /*
       * Esperamos un poco para que se vea
       * el scroll antes de abrir el modal.
       */
      setTimeout(() => {
        setModal("budget");
      }, 650);
    } else {
      /*
       * Si por cualquier motivo no encuentra
       * la sección, abrimos igualmente.
       */
      setModal("budget");
    }
  };

  return (
    <>
      <HomeHero
        onBudgetClick={openBudgetFromHero}
      />

      <Intro />
      
      <BlogSection />



      <ParallaxBlock
        onContactClick={() =>
          setModal("contact")
        }
        onBudgetClick={() =>
          setModal("budget")
        }
      />

    

      {/* MODAL CONTACTO */}

      <ContactModal
        open={modal === "contact"}
        mode="contact"
        onClose={closeModal}
      />

      {/* MODAL PRESUPUESTO */}

      <ContactModal
        open={modal === "budget"}
        mode="budget"
        onClose={closeModal}
      />

            <ProjectsPreview />
    </>
  );
}