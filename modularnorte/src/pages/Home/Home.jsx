import HomeHero from "./HomeHero";
import Intro from "./Intro";
import ProjectsPreview from "./ProjectsPreview";
import ParallaxBlock from "./ParallaxBlock";
import Testimonials from "./Testimonials";
import BlogSection from "../../components/BlogSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Intro />
      <ProjectsPreview />
      <ParallaxBlock />
      <BlogSection />
      
    </>
  );
}
