/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Layout from "./components/layout";
import styles from "../styles/about.module.css";
import dave1 from "../../public/images/about/d2.webp";

import about from "../../public/images/about/DD.jpg";
import hobby from "../../public/images/about/pl1.jpg";
import hobby4 from "../../public/images/about/s1.webp";

export default function About() {
  return (
    <Layout title="About">
      <motion.div className={styles.hero}>
        <div className={styles.container__wrapper}>
          <div className={styles.hero__container}>
            <h1 className={styles.hero__h1}>
              A developer & musician at heart.
            </h1>
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
            height={1050}
            width={800}
            priority={true}
          />
         
        </div>
      </motion.div>

      <main className={` section ${styles.main}`}>
        <div className={styles.heading}>
          <h1>Know more about me. </h1>
        </div>

        <aside className={styles.text__wrapper}>
          <Image
            src={about}
            alt="David Hernandez"
            className={styles.aboutImg}
            height={540}
            width={540}
          />
          <div className={styles.about__txt_wrapper}>
            <p className={`${styles.text__p} ${styles.text} `}>
              {" "}
              I've been working with computers since I was a kid, and I started my journey playing around with the hardware of that time speaking of 2000's, becoming the family tech guy by default.
            </p>
            <p className={`${styles.text__p} ${styles.text2} `}>
              Fast forward to 2022 after almost 3 years of moving to Canada, I was a proud participant of the Skills for Hire Atlantic Web development program @ <a className={styles.link} href="https://skillsforhire.ca/" target="_blank">Skills for Hire</a> and sucessfully graduate from @ <a className={styles.link} href="https://skillsforhire.ca/" target="_blank">Npower Canada</a>  as a JR. IT Analyst, working my way up to what really brings me passion about , craft beautiful websites and apps, solve problems and bring value to the user.
            </p>
            <p className={`${styles.text__p} ${styles.text3} `}>
              What excites me most about working in web  development is
              being able to design and create things that have purpose and solve
              real problems. Leaning into customer research and insight, finding
              the right problems to solve
            </p>
          </div>
        </aside>

        <div className={styles.hobby}>
          <div className={styles.hobby__wrap}>
            
            <div className={styles.image__div}>
              
              <div className={styles.hobbyTxt}>
              <h1> When I'm not working, I'm doing something else.</h1>
                
                  <p>
                  When I'm not caught up in the tech world, you'll catch me living life in all its flavors. Whether I'm snapping pics, checking out new spots, or just enjoying a good cup of coffee, these are the things that keep me ticking. Canada's become my playground, soaking up nature's beauty and diving into outdoor adventures.
                  </p>
                  <p>
                  Family time? That's my treasure. Hanging out with my loved ones is where the real magic happens. And you know, I try to keep things balanced – a bit of screen time, a bit of real-world action. Reading and squeezing in some workouts help keep the vibe positive. Life's a mixtape of moments, and I'm all about savoring every beat.
                  </p>
               
              </div>
              <Image
                className={styles.hobbyImg}
                src={hobby}
                width={600}
                height={800}
                alt="Image of "
              />
             
              
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
