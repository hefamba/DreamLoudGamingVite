import Carousel from 'react-bootstrap/Carousel';
import second from '../../public/imgs/Second.jpg';
import first from '../../public/imgs/First.jpg';
import third from '../../public/imgs/Third.jpg';

const ShopCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={first} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={second} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={third} alt="" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ShopCarousel;
