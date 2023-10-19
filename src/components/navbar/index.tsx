import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '/public/dreaming_cloud.png';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useShoppingCart } from '../../context/ShoppingCartContex';

type Props = {};

const Navigation = (props: Props) => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Navbar sticky="top" style={{ backgroundColor: 'black', width: '100vw' }}>
      <Container className="text-white">
        Nav
        <Nav>
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
      </Container>
    </Navbar>
  );
};

export default Navigation;
