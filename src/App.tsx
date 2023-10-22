import { Route, Routes, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/home';
import About from './pages/about';
import Team from './pages/team';
import Shop from './pages/shop';
import Navigation from './components/navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContex';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-dark" style={{ height: '100%' }}>
      <ShoppingCartProvider>
        <Navigation />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Container>
        <Footer />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
