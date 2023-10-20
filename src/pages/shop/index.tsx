import { Row, Col } from 'react-bootstrap';
import StoreItem from '../../components/StoreItem';
import storeItems from '../../data/items.json';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Shop = () => {
  useEffect(() => {
    function print() {
      console.log(storeItems);
    }
    print();
  });
  return (
    <>
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
