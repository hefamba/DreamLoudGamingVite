import { motion } from 'framer-motion';

import bannerClip from '../../assets/overlayBanner.mp4';
import shopPic from '../../../public/imgs/about_photo.jpg';
import ShopCarousel from '../../components/ShopCarousel';

const Home = () => {
  return (
    <>
      <section className="mt-2">
        <div
          className="text-white"
          style={{
            position: 'relative',
            textAlign: 'center',
          }}>
          <h2
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 },
              }}>
              Welcome, to DreamLoud Gaming
            </motion.div>
          </h2>

          <video
            src={bannerClip}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
              border: 'solid 5px black',
            }}
          />
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Home;
