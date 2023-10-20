import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const Team = (props: Props) => {
  return (
    <motion.div
      className="my-5 md:w--3/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}>
      {' '}
      Team{' '}
    </motion.div>
  );
};

export default Team;
