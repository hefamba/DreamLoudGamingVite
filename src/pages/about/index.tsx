import dreamloudbanner from '../../../public/imgs/Second.jpg';
import dreamloudLogoBanner from '../../../public/imgs/First.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <section
        className="text-white mt-5"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <img
              src={dreamloudbanner}
              alt="about"
              style={{
                borderRadius: '20px',
                width: '100%',
                boxShadow: '15px 15px 20px black',
              }}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <img
              src={dreamloudLogoBanner}
              alt="about"
              style={{
                borderRadius: '20px',
                width: '100%',
                boxShadow: '15px 15px 20px black',
              }}
            />
          </motion.div>
        </div>
        <h1 className="mt-5">About DreamLoud</h1>
      </section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="mt-3 text-white"
        style={{
          backgroundColor: 'black',
          width: '100%',
        }}>
        <div style={{ display: 'flex', padding: '30px', gap: '30px' }}>
          <motion.div
            style={{
              border: '1px cyan solid',
              padding: '30px',
              borderRadius: '30px',
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}>
            <p>
              DreamLoud Gaming is an entertainment and esports company based in
              South Texas. In 2021 DreamLoud Gaming emerged as on of the top
              organization to compete in the toped ranked Halo Championship
              Series. The company's stable of gaming and lifestyle content
              creators reach millions of viewers every day on YouTube, Twitch,
              and social media platforms.
            </p>
            <p>
              Founded as a professional Halo team in 2016, owner Chris Crane has
              grown the Houston-based organization into one of the largest and
              most-winning esports groups in the world. DreamLoud's ownership
              group includes superstar Bruce Wayne, Kanye West, esports pioneer
              Walshy, and SpongeBob Squarepants.
            </p>
            <p>
              TODAY, DREAMLOUD COMPETES, STREAMS AND PRODUCES CONTENT ACROSS
              MULTIPLE GAMING TITLES INCLUDING HALO INFINITE, CALL OF DUTY,
              OVERWATCH, ROCKET LEAGUE, SUPER SMASH BROS, AND VALORANT. IN 2019,
              FORBES RANKED DREAMLOUD GAMING AS THE #1 MOST VALUABLE ESPORTS
              ORGANIZATION IN THE WORLD.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
