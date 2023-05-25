/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion'
import { IoLogoJavascript, IoLogoCss3,IoLogoPython} from "react-icons/io";
import { SiTailwindcss, SiNextdotjs,SiStrapi, SiPrisma,SiAmazonaws, SiRemix, SiMongodb, SiGraphql} from "react-icons/si";
import {  FaReact,FaNodeJs,FaGitAlt } from 'react-icons/fa';

import acapulco from '../../../public/images/acapulcoEnlaPiel.webp'

import styles from "../../styles/heroWork.module.css"


export default function HeroWork() {
    const [isClicked, setIsClicked] = useState(false);
    const [showFullScreenSlide, setShowFullScreenSlide] = useState(false);

  


    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => {
        setShowFullScreenSlide(true);
      }, 500); // Delay for the current animation to complete before showing the full-screen slide
    };

    const { ref } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

      const animateVariants = {
          initial: { opacity: 1, x: 0 },
          animate: { opacity: 0, x: 55 },
      };
    
      const animateVariants2 = {
          initial: { opacity: 1, x: 0 },
          animate: { opacity: 0, x: -85 },
      };
    
      const animateVariants3 = {
        animate: { opacity: 0, y: 15 },
        initial: { opacity: 1, y: 0 },
      };
     
      const fullScreenSlideVariants = {
        initial: { y: '120%' },
        animate: { y: '0' },
      };

  return (
    <motion.div
      className={` ${styles.hero}`}
      initial={{ opacity: 0, y: 15 }} // Initial state: invisible
      animate={{ opacity: 1, y: 0 }} // Animation state: visible if in view, otherwise invisible and y position at -15
      transition={{ delay: 0.3, duration: 0.5 }} // Delay of 0.5s
    >
      <div className={styles.hero__container}>
        <motion.h1
          className={styles.hero__h1}
          initial={animateVariants.initial}
          animate={
            isClicked ? animateVariants.animate : animateVariants.initial
          }
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          What I've been up to.
        </motion.h1>

        <motion.div
          className={styles.hero__textWrap}
          initial={animateVariants.initial}
          animate={
            isClicked ? animateVariants2.animate : animateVariants2.initial
          }
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <span className={styles.hero__span}></span>
          <p className={styles.hero__subtitle}>Portfolio</p>
        </motion.div>

        <motion.p
          className={styles.hero__info}
          initial={animateVariants.initial}
          animate={
            isClicked ? animateVariants3.animate : animateVariants3.initial
          }
          transition={{ delay: 0.39, duration: 0.5 }}
        >
          Here is a selection of projects that I’ve worked on.
        </motion.p>
      </div>

      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={`${styles.pulse}`}
          onClick={handleClick}
          initial={animateVariants3.initial}
          animate={
            isClicked ? animateVariants3.animate : animateVariants2.initial
          }
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <h2>Jump in</h2>
        </motion.div>

        {showFullScreenSlide && (
          <motion.div
            className={styles.fullScreenSlide}
            initial={fullScreenSlideVariants.initial}
            animate={fullScreenSlideVariants.animate}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className={styles.project__wrap}>
              <Link href={'/'}>
                <Image src={acapulco} alt='Project Acapulco en la Piel' className={styles.project__img} height={300} width={550}/>
                <h2 className={styles.project__title}>Acapulco en la Piel </h2>
                <p className={styles.project__text}> Website made for a Youtuber based in Acapulco, Mexico. </p>
                <div className={styles.project__icons}>
                    <IoLogoJavascript className={styles.techIcon}/>
                    <IoLogoCss3 className={styles.techIcon}/>
                    <SiNextdotjs className={styles.techIcon}/>
                    <SiStrapi className={styles.techIcon}/>
                    
                </div>
                <p className={`${styles.project__view}`}>View Project</p>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
