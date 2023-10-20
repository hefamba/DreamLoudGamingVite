import { Row, Col } from 'react-bootstrap';
import StoreItem from '../../components/StoreItem';
import storeItems from '../../data/items.json';
import { motion } from 'framer-motion';

const Shop = () => {
  return (
    <>
      <div
        className="mt-3 text-white"
        style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>Shop DreamLoud Apparel</h2>
      </div>
      <motion.div className="mt-5">
        <Row md={2} xs={1} lg={3} xl={4} className="g-3">
          {storeItems.map((item) => (
            <Col key={item.id}>
              <StoreItem
                id={item.id}
                price={item.price}
                name={item.name}
                imgUrl={item.imgUrl}
              />
            </Col>
          ))}
        </Row>
      </motion.div>
    </>
  );
};
export default Shop;
