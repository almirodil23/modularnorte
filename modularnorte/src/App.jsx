import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";

import Preloader from "./components/Preloader";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Nosotros from "./pages/Nosotros";
import ProcesoConstructivo from "./pages/ProcesoConstructivo";
import TourVirtual from "./pages/TourVirtual/TourVirtual";
import Preguntas from "./pages/Preguntas/Preguntas";
import ProjectDetail from "./pages/Projects/ProjectDetail";
import Conocenos from "./pages/Conocenos";
import Policy from "./pages/Policy";
import ConsentBanner from "./components/Consent";
import Gracias from "./components/Gracias";
import BlogDetail from "./components/BlogDetail";
import BlogSection from "./components/BlogSection";
import ScrollToTop from "./components/ScrollToTop";
import SeoManager from "./seo/SeoManager";
import NotFound from "./pages/NotFound";

function LegacyProjectRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/proyecto/${slug}`} replace />;
}

function LegacyBlogRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/blog/${slug}`} replace />;
}

function App() {
  return (
    <BrowserRouter>
      <SeoManager />
      <ScrollToTop />
      <Preloader />
      <ConsentBanner />
      <Header />
      <SideMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/proyecto/:slug" element={<ProjectDetail />} />
        <Route path="/contactar" element={<Contact />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/tour-virtual" element={<TourVirtual />} />
        <Route path="/preguntas-frecuentes" element={<Preguntas />} />
        <Route path="/proceso-constructivo" element={<ProcesoConstructivo />} />
        <Route path="/politica-privacidad" element={<Policy />} />
        <Route path="/gracias" element={<Gracias />} />

        {/* Compatibilidad con URLs antiguas. En producción .htaccess las redirige con 301. */}
        <Route path="/projects" element={<Navigate to="/proyectos/" replace />} />
        <Route path="/producto/:slug" element={<LegacyProjectRedirect />} />
        <Route path="/blogs" element={<Navigate to="/blog/" replace />} />
        <Route path="/blogs/:slug" element={<LegacyBlogRedirect />} />
        <Route path="/privacy" element={<Navigate to="/politica-privacidad" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
