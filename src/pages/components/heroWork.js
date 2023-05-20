/* eslint-disable react/no-unescaped-entities */
import {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import image1 from '../../../public/images/developer.svg'
import styles from "../../styles/heroWork.module.css"


export default function HeroWork() {
  return (
    <motion.div
      className={` ${styles.hero}`}
      initial={{ opacity: 0, y: 15 }} // Initial state: invisible
      animate={{ opacity: 1, y: 0 }} // Animation state: visible if in view, otherwise invisible and y position at -15
      transition={{ delay: 0.3, duration: 0.5 }} // Delay of 0.5s
    >
      <div className={styles.hero__container}>
        <h1 className={styles.hero__h1}>What I've been up to.</h1>
        <div className={styles.hero__textWrap}>
          <span className={styles.hero__span}></span>
          <p className={styles.hero__subtitle}>Portfolio</p>
        </div>
        <p className={styles.hero__info}>
          Here is a selection of projects that I’ve worked on.
        </p>
      </div>

      <motion.div className={styles.project}>
        <aside className={styles.project__wrapper}>
          
            <Image
              className={styles.projectImage}
              src={image1}
              alt="design"
              
            />
           
          
          
        </aside>
      </motion.div>
    </motion.div>
  );
}
