import { Row, Col } from 'react-bootstrap';
import StoreItem from '../../components/StoreItem';

export const storeItems = [
  {
    id: 1,
    name: 'Book',
    price: 10.99,
    imgUrl: '/imgs/hoodie_blue.jpg',
  },
  {
    id: 2,
    name: 'Computer',
    price: 1199,
    imgUrl: '/imgs/hoodie_blue.jpg',
  },
  {
    id: 3,
    name: 'Banana',
    price: 1.05,
    imgUrl: '/imgs/hoodie_blue.jpg',
  },
  {
    id: 4,
    name: 'Car',
    price: 14000,
    imgUrl: '/imgs/hoodie_blue.jpg',
  },
];

const Shop = () => {
  return (
    <div>
      <Row md={2} xs={1} lg={3} xl={4} className="g-3">
        {storeItems.map((item) => (
          <Col>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Shop;
