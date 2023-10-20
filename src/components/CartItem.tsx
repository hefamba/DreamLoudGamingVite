import { useShoppingCart } from '../context/ShoppingCartContex';
import storeItems from '../data/items.json';
import { Button, Stack } from 'react-bootstrap';
import formatCurrency from '../utilities/formatCurrency';

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item === undefined) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div className="me-auto" style={{ color: 'black' }}>
        {item.name}{' '}
        {quantity > 1 && (
          <span className="text-muted" style={{ fontSize: '.75rem' }}>
            {quantity}x
          </span>
        )}
        <div className="text-muted" style={{ fontSize: '.90rem' }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div style={{ color: 'black' }}>
        {formatCurrency(item.price * quantity)}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}>
        X
      </Button>
    </Stack>
  );
};

export default CartItem;
