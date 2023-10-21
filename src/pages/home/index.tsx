import { motion } from 'framer-motion';
import { Button, Card, Col, Row, Modal } from 'react-bootstrap';
import bannerClip from '../../assets/overlayBanner.mp4';
import shopPic from '../../../public/imgs/about_photo.jpg';
import third from '../../../public/imgs/Third.jpg';
import killtac from '../../assets/killtac game clip.mp4';
import overkill from '../../assets/overkill kth.mp4';
import clip3 from '../../assets/Ha clip 3.mp4';
import { useState } from 'react';

type VideoData = {
  id: number;
  name: string;
  vid: string;
};

const videoData: VideoData[] = [
  {
    id: 1,
    name: 'KILLTAC TIME!',
    vid: killtac,
  },
  {
    id: 2,
    name: 'OVERKILL?...WEll THAT WAS EASY',
    vid: overkill,
  },
  {
    id: 3,
    name: 'KILLTAC TIME!',
    vid: clip3,
  },
];

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  const openVideoModal = (video: VideoData) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };
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
      <div
        className="mt-5"
        style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
        <h1>Get Your Merch!</h1>
      </div>
      <section
        className="mt-4"
        style={{
          border: 'black solid 2px',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          padding: '20px 0',
          borderRadius: '20px',
        }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          style={{
            height: '90%',
            width: '95%',
            border: 'solid 1px cyan',
            borderRadius: '25px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            padding: '15px',
            color: 'whitesmoke',
          }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            style={{
              paddingLeft: '50px',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <img
              src={shopPic}
              alt="shop pic"
              style={{ width: '15rem', borderRadius: '20px' }}
            />
          </motion.div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '100%',
              }}>
              <p>
                Show your DreamLoud Support by shopping at our merch <br />
                shop to get the latest collections, teamwear and other <br />
                DreamLoud products.
              </p>
              <img
                src={third}
                alt="third"
                style={{ width: '80%', borderRadius: '20px' }}
              />
              <Button
                className="mt-2"
                variant="outline-info"
                style={{ width: '60%' }}>
                Shop Now!
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          <Row sm={1} md={3}>
            {videoData.map((video) => (
              <Card key={video.id}>
                <Col>
                  <div onClick={() => openVideoModal(video)}>
                    <video
                      autoPlay
                      src={video.vid}
                      style={{ width: '100%', cursor: 'pointer' }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Text>{video.name}</Card.Text>
                  </Card.Body>
                </Col>
              </Card>
            ))}
          </Row>
        </div>

        <Modal show={selectedVideo !== null} onHide={closeVideoModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              {(selectedVideo as (typeof videoData)[0] | null)?.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedVideo && (
              <video
                src={selectedVideo.vid}
                controls
                style={{ width: '100%' }}
              />
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeVideoModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
};

export default Home;
