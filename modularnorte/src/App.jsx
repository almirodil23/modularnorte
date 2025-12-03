import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Preloader from './components/Preloader'
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Footer from './components/Footer'

import Home from './pages/Home/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Nosotros from './pages/Nosotros'
import Blog from './pages/Blog'
import ProcesoConstructivo from './pages/ProcesoConstructivo'
import TourVirtual from './pages/TourVirtual/TourVirtual'
import Preguntas from './pages/Preguntas/Preguntas'
import ProjectDetail from './pages/Projects/ProjectDetail'
import Conocenos from './pages/Conocenos'

function App() {
  return (
    <BrowserRouter>
      
      <Preloader />
      <Header />
      <SideMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactar" element={<Contact />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/tour-virtual" element={<TourVirtual />} />
        <Route path="/preguntas-frecuentes" element={<Preguntas />} />
        <Route path="/producto/:slug" element={<ProjectDetail />} />
        <Route path="/proceso-constructivo" element={<ProcesoConstructivo />} />
        <Route path="/conocenos" element={<Conocenos />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
