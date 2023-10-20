import { Button, Card } from 'react-bootstrap';
import formatCurrency from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContex';
import { motion } from 'framer-motion';

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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}>
      <Card
        className="h-100"
        style={{
          border: 'black solid 3px',
          boxShadow: '15px 15px 20px black',
        }}>
        <Card.Img
          variant="top"
          src={imgUrl}
          style={{ objectFit: 'cover', borderBottom: 'black solid 3px' }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{formatCurrency(price)}</Card.Text>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="w-100"
                onClick={() => increaseItemQuantity(id)}
                variant="info">
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
                  <Button
                    onClick={() => decreaseItemQuantity(id)}
                    variant="info">
                    -
                  </Button>
                  <div>
                    <span>{quantity}</span> in cart
                  </div>
                  <Button
                    onClick={() => increaseItemQuantity(id)}
                    variant="info">
                    +
                  </Button>
                </div>
                <Button variant="danger" onClick={() => removeFromCart(id)}>
                  Remove from cart
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default StoreItem;
