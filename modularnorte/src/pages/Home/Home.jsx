import HomeHero from "./HomeHero";
import Intro from "./Intro";
import ProjectsPreview from "./ProjectsPreview";
import ParallaxBlock from "./ParallaxBlock";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Intro />
      <ProjectsPreview />
      <ParallaxBlock />
      <Testimonials />
    </>
  );
}
