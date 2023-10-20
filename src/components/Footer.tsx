import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitch,
  FaTwitter,
  FaHome,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

import xboxImage from '../../public/imgs/xbox.png';

import scuff from '../../public/imgs/scuff.png';

const partners = [
  {
    img: scuff,
  },
  {
    img: xboxImage,
  },
];

const icons = [
  {
    icon: <FaInstagram />,
  },
  {
    icon: <FaFacebook />,
  },
  {
    icon: <FaTwitch />,
  },
  {
    icon: <FaTwitter />,
  },
  {
    icon: <FaTiktok />,
  },
];

const Footer = () => {
  return (
    <section
      style={{
        border: 'black solid 2px',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0',
      }}>
      <div
        style={{
          height: '90%',
          width: '80%',
          border: 'solid 1px cyan',
          borderRadius: '25px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: '15px',
          color: 'whitesmoke',
        }}>
        <div
          style={{
            paddingLeft: '15px',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
          }}>
          <h2>#DreamLoud </h2>
          <p style={{ fontSize: '.5rem' }}>COPYRIGHT © 2023 DREAMLOUD GAMING</p>
          <h4>Socials</h4>
          <p style={{ display: 'flex', gap: '3px' }}>
            {icons.map((icon) => (
              <div>{icon.icon}</div>
            ))}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
          }}>
          <h2>Our Partners</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              width: '100%',
            }}>
            {partners.map((p) => (
              <img src={p.img} alt="logoSponsor" style={{ width: '4rem' }} />
            ))}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
          }}>
          <h2>Contact</h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              width: '100%',
            }}>
            <p>
              <FaHome /> 15587 htown blvd, Houston, Tx
            </p>
            <p>
              <FaEnvelope /> dreamloud@dreamloud.org
            </p>
            <p>
              <FaPhone /> +01 555 584 1123
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
