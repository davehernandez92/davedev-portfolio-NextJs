/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import acapulco from "../../../public/images/acapulcoEnlaPiel.jpg";

import styles from "../../styles/heroWork.module.css";

export default function HeroWork() {
  const [isClicked, setIsClicked] = useState(false);
  
  const ref1 = useRef(null);
  const isInView = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  


  const handleClick = () => {
    setIsClicked(true);

    const section = document.getElementById("fullScreenSlide");
    setTimeout(() => {
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
   
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
    
  };

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
  

  return (
    <>
      <motion.div
        className={` ${styles.hero}`}
        initial={{ opacity: 0, y: 15 }} // Initial state: invisible
        animate={{ opacity: 1, y: 0 }} // Animation state: visible if in view, otherwise invisible and y position at -15
        transition={{ delay: 0.3, duration: 0.5 }} // Delay of 0.5s
      >
        <div className={styles.hero__container}>
          {/* left txt hero  */}
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
        {/* Jump in click  */}
        <div className={styles.container}>
          <motion.div
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
        </div>
      </motion.div>

      <motion.div id="fullScreenSlide" className={`section ${styles.fullScreenSlide}`}>
        {/* Projects */}
        <motion.div
          className={styles.project__wrap}
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : ""}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href={"/work/acapulcoenlapiel"} className={styles.project__wrapLink}>
            <motion.div className={styles.img__div}>
              <Image
                src={acapulco}
                priority={true}
                alt="Project Acapulco en la Piel"
                className={styles.project__img}
                height={619}
                width={1440}
              />
            </motion.div>

            <h2 className={styles.project__title}>Acapulco en la Piel. </h2>
            <div className={styles.project__stack}>
              <p className={styles.project__text}>Next.js</p>
              <p className={styles.project__text}>Strapi</p>
              <p className={styles.project__text}>CSS modules</p>
            </div>

            <p className={`${styles.project__view}`}>View Project</p>
          </Link>
        </motion.div>

        <motion.div
          className={styles.project__wrap}
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : ""}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href={"/work/acapulcoenlapiel"} className={styles.project__wrapLink}>
            <motion.div className={styles.img__div}>
              <Image
                src={acapulco}
                priority={true}
                alt="Project Acapulco en la Piel"
                className={styles.project__img}
                height={619}
                width={1440}
              />
            </motion.div>

            <h2 className={styles.project__title}>Acapulco en la Piel. </h2>
            <div className={styles.project__stack}>
              <p className={styles.project__text}>Next.js</p>
              <p className={styles.project__text}>Strapi</p>
              <p className={styles.project__text}>CSS modules</p>
            </div>

            <p className={`${styles.project__view}`}>View Project</p>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}