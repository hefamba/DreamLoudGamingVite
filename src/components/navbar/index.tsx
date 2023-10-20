import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/dreaming_cloud.png';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useShoppingCart } from '../../context/ShoppingCartContex';

const Navigation = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Navbar sticky="top" expand="md" bg="dark" style={{ width: '100vw' }}>
      <Container className="text-white">
        <Navbar.Brand>
          <img src={logo} alt="logo" style={{ width: '40px' }} />
        </Navbar.Brand>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '60vw',
            padding: '5px 0',
          }}>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <div style={{ paddingLeft: '10px' }}>
              <Nav variant="underline">
                <Nav.Link to="/" as={NavLink} className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink} className="text-white">
                  About
                </Nav.Link>
                <Nav.Link to="/team" as={NavLink} className="text-white">
                  Meet the Team
                </Nav.Link>
                <Nav.Link to="/shop" as={NavLink} className="text-white">
                  Shop
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </div>

        <div style={{ width: '10vw' }}>
          {cartQuantity > 0 && (
            <Button
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50px',
                position: 'relative',
              }}
              variant="outline-light"
              onClick={openCart}>
              <FaShoppingCart />
              <div
                className="bg-danger d-flex justify-content-center align-items-center"
                style={{
                  borderRadius: '50px',
                  color: 'white',
                  width: '1.5rem',
                  height: '1.5rem',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  transform: 'translate(25%,25%)',
                }}>
                {cartQuantity}
              </div>
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
