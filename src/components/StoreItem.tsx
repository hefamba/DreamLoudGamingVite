import React from 'react';
import { Button, Card } from 'react-bootstrap';
import formatCurrency from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContex';

type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemsProps) => {
  const {
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
    getItemQuantity,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imgUrl} style={{ objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{formatCurrency(price)}</Card.Text>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseItemQuantity(id)}>
              + Add to Cart
            </Button>
          ) : (
            <div
              style={{
                gap: '.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <div
                className="d-flex align-items-center justify-content-center "
                style={{ gap: '.5rem' }}>
                <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                <div>
                  <span>{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseItemQuantity(id)}>+</Button>
              </div>
              <Button variant="danger" onClick={() => removeFromCart(id)}>
                Remove from cart
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
