/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useInView } from "react-intersection-observer";
import {  motion } from "framer-motion";
import Image from "next/image";
import Layout from "./components/layout"
import styles from '../styles/about.module.css'
import dave1 from '../../public/images/about/d2.jpg'
import dave2 from '../../public/images/about/d4.jpg'
import place from '../../public/images/about/pl1.jpg'
import sarah from '../../public/images/about/s1.jpg'
import dave3 from '../../public/images/about/d1.jpg'
import dave4 from '../../public/images/about/d3.jpg'

export default function About() {
  return (
    <Layout title="About">
      <motion.div className={styles.hero}>
      <div className={styles.container__wrapper}>
        <div className={styles.hero__container}>
          <h1 className={styles.hero__h1}>A developer & musician at heart.</h1>
          <div className={styles.hero__textWrap}>
            <span className={styles.hero__span}></span>
            <p className={styles.hero__subtitle}> About Me </p>
          </div>
          <p className={styles.hero__info}>My name is David Hernandez.</p>
          <p className={styles.hero__info2}>
            I'm a Front-end Developer who is passionate about clean designs,
            photography, music, and coffee.
          </p>
        </div>

      </div>
        <div className={styles.images}>
          <Image
            className={styles.image1}
            src={dave1}
            alt="David Picture"
            height={1600}
            width={1200}
            priority={true}
          />
          <Image
            className={styles.imageback}
            src={dave2}
            alt="David Picture"
            height={1600}
            width={1200}
            priority={true}
          />
        </div>
      </motion.div>
    </Layout>
  );
}


