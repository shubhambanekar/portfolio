import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { ParticlesBackground } from './components/ParticlesBackground';
import { PageTransition } from './components/PageTransition';
import { CustomCursor } from './components/CustomCursor';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
}

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div style={{
      minHeight: '100vh',
      background: isDark ? '#0a0a0a' : '#f5f5f7',
      position: 'relative',
      transition: 'background 0.3s ease'
    }}>
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
