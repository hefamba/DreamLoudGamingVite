import { motion } from 'framer-motion';
import { Card, Col, Row } from 'react-bootstrap';
import teamBanner from '../../../public/imgs/halo-infinite-spartans-banner.jpg';
import { FaInstagram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import henry from '../../../public/imgs/henry_1.png';
import ide from '../../../public/imgs/ide_one.png';
import obi from '../../../public/imgs/obi_1.png';
import quincy from '../../../public/imgs/quincy_1.png';
import jonas from '../../../public/imgs/jonas_1.jpg';
import will from '../../../public/imgs/will_1.jpg';
import monte from '../../../public/imgs/owner_photo.jpg';
import { Container } from 'react-bootstrap';

const team = [
  {
    id: 1,
    name: 'MetaMunkeyX',
    title: 'Pro/Creator',
    socials: {
      instagram: <FaInstagram />,
      twitch: <FaTwitch />,
      twitter: <FaTwitter />,
      youtube: <FaYoutube />,
    },
    image: henry,
  },
  {
    id: 2,
    name: 'YOMAMA 4EVA',
    title: 'Creator',
    socials: {
      twitch: <FaTwitch />,
      twitter: <FaTwitter />,
      youtube: <FaYoutube />,
    },
    image: ide,
  },
  {
    id: 3,
    name: 'StaticShakaZulu',
    title: 'Pro',
    socials: {
      twitch: <FaTwitch />,
      twitter: <FaTwitter />,
    },
    image: obi,
  },
  {
    id: 4,
    name: 'A$AP IKE',
    title: 'Creator',
    socials: {
      twitch: <FaTwitch />,
      twitter: <FaTwitter />,
      youtube: <FaYoutube />,
      instagram: <FaInstagram />,
    },
    image: quincy,
  },
  {
    id: 5,
    name: 'KSI KiDJOK3R',
    title: 'Creator',
    socials: {
      twitch: <FaTwitch />,
      twitter: <FaTwitter />,
      youtube: <FaYoutube />,
      instagram: <FaInstagram />,
    },
    image: jonas,
  },
  {
    id: 6,
    name: 'Will',
    title: 'C.E.O',
    socials: {
      twitter: <FaTwitter />,
    },
    image: will,
  },
  {
    id: 7,
    name: 'Monte',
    title: 'Creator',
    socials: {
      twitch: <FaTwitch />,
      twitter: <FaTwitter />,
      youtube: <FaYoutube />,
    },
    image: monte,
  },
];

const Team = () => {
  return (
    <Container>
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: 70 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-5"
          style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={teamBanner}
            alt="banner"
            style={{
              width: '100%',
              border: 'black solid 3px',
              boxShadow: '15px 15px 20px black',
            }}
          />
        </motion.div>
        <h2 className="mt-5 text-white">Team Members</h2>

        <div className="mt-3 gap-5" style={{ display: 'flex' }}>
          <Row md={2} xs={1} lg={2} xl={3} className="g-3">
            {team.map((p) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}>
                <Col>
                  <Card
                    className="h-100"
                    style={{
                      border: 'black solid 3px',
                      boxShadow: '15px 15px 20px black',
                    }}>
                    <Card.Img
                      variant="top"
                      src={p.image}
                      style={{
                        objectFit: 'cover',
                        borderBottom: 'black solid 3px',
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{p.name}</Card.Title>
                      <Card.Text>
                        <p>{p.title}</p>
                        <div className="d-flex">
                          <p>{p.socials?.instagram}</p>
                          <p>{p.socials?.twitch}</p>
                          <p>{p.socials?.twitter}</p>
                          <p>{p.socials?.youtube}</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </motion.div>
            ))}
          </Row>
        </div>
      </motion.div>
    </Container>
  );
};

export default Team;
