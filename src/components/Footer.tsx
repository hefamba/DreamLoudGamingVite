import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitch,
  FaTwitter,
} from 'react-icons/fa';
import scuff from '../../public/imgs/scuff.png';
import nvidia from '../../public/imgs/nvidia.png';
import pringles from '../../public/imgs/pringles.png';

const partners = [
  {
    partner: nvidia,
  },
  {
    partner: pringles,
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
        height: '10%',
        border: 'black solid 2px',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px',
      }}>
      <div
        style={{
          height: '90%',
          width: '80%',
          border: 'solid 1px cyan',
          borderRadius: '25px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
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
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {partners.map((p) => (
              <img
                src={p.partner}
                alt="logoSponsor"
                style={{ width: '4rem' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
