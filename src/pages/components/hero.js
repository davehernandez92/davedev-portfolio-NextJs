import {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import image1 from '../../../public/images/acapulcoEnlaPiel.webp'
import styles from "../../styles/hero.module.css"


export default function Hero() {
    const [startAnimation, setStartAnimation] = useState(false)
    

   
    useEffect(() => {
        setStartAnimation(true);
      }, []);
    const variants = {
        first:{
            opacity:0,
            y: 20,   
            
        },
        second:{
            opacity:0,
            x: -20,  
            y:0,
            
        },
        third:{
            opacity:0,
            y: 30,   
            
        },
        fourth:{
            opacity:0,
               
            
        },
        aligned:{
            opacity:1,
            y: 0, 
            x:0,  
            transition: {
                duration: .9,
                delay:0.4
              }, 
        },
        aligned2:{
            opacity:1,
            y: 0, 
            x:0,  
            transition: {
                duration: .9,
                delay:0.45
              }, 
        },
        aligned3:{
            opacity:1,
            y: 0, 
            x:0,  
            transition: {
                duration: .9,
                delay:0.5
              }, 
        },
        aligned4:{
            opacity:1,
            y: 0, 
            x:0,  
            transition: {
                duration: .7,
                delay:0.2
              }, 
        },
    }

  return (
    <div className={` ${styles.hero}`}>
      <motion.div className={styles.hero__container}>
        <motion.h1
          className={styles.hero__h1}
          variants={variants}
          initial="first"
          animate={startAnimation ? "aligned" : "first"}
        >
          David Hernandez.
        </motion.h1>
        <motion.div
          className={styles.hero__textWrap}
          variants={variants}
          initial="second"
          animate={startAnimation ? "aligned2" : "second"}
        >
          <span className={styles.hero__span}></span>
          <p className={styles.hero__subtitle}>Front-end Developer</p>
        </motion.div>
        <motion.p
          className={styles.hero__info}
          variants={variants}
          initial="third"
          animate={startAnimation ? "aligned3" : "third"}
        >
          Website developed for a tourism Youtuber based in Acapulco Guerrero.
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.project}
        variants={variants}
        initial="fourth"
        animate={startAnimation ? "aligned4" : "fourth"}
      >
        <aside className={styles.project__wrapper}>
          <Link href='/projects'>
            <Image
              className={styles.projectImage}
              src={image1}
              alt="Acapulco en la piel project"
            />
            <motion.div className={styles.viewProject}
            whileHover={{opacity:1} }
            >
             <p>View this project </p>
            </motion.div>
          </Link>
          <button className={styles.button}>
            <Link href="/projects">See all projects</Link>
          </button>
        </aside>
      </motion.div>
    </div>
  );
}
