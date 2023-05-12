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
        initial: { opacity: 0, x: -25 },
        animate: { opacity: 1, x: 0 }
      };
  return (
    <div className={styles.skillSection}>
      <motion.div className={styles.skills__wrap}>
        <h2 className={styles.skills__heading}>Friends I've made on the way </h2>

        <motion.ul className={styles.skillset} ref={ref}>
            <Image
              className={styles.projectImage}
              src={acapulco}
              alt="Acapulco en la piel logo"
              width={70}
              height={70}
            />
        </motion.ul>
      </motion.div>
    </div>
  );
}
