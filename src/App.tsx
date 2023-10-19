import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/home';
import About from './pages/about';
import Team from './pages/team';
import Shop from './pages/shop';
import Navigation from './components/navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContex';

function App() {
  return (
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
    </ShoppingCartProvider>
  );
}

export default App;