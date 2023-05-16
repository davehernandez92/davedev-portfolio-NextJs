/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

import acapulco from '../../../public/images/acapulco.png'
import styles from '../../styles/customers.module.css'

export default function Customers() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });   
    const listItemVariants = {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 }
      };
  return (
    <div className={` section ${styles.customerSection}`}>
      <motion.div className={styles.customers__wrap}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 0, duration: .5 }}
      >
        <h1 className={styles.customers__heading}>Friends I've made along the way. </h1>

        <motion.ul className={styles.customerset} ref={ref}>
            <Image
              className={styles.projectImage}
              src={acapulco}
              alt="Acapulco en la piel logo"
              width={90}
              height={90}
            />
            <Image
              className={styles.projectImage}
              src={acapulco}
              alt="Acapulco en la piel logo"
              width={90}
              height={90}
            />
            <Image
              className={styles.projectImage}
              src={acapulco}
              alt="Acapulco en la piel logo"
              width={90}
              height={90}
            />
            <Image
              className={styles.projectImage}
              src={acapulco}
              alt="Acapulco en la piel logo"
              width={90}
              height={90}
            />
        </motion.ul>
      </motion.div>
    </div>
  );
}
