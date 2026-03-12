import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Work = lazy(() => import('./pages/Work'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-background text-text">
          <Navbar />
          <main id="main" tabIndex={-1} className="flex-1">
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App