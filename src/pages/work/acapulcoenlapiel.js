/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../../styles/work.module.css";
import projectImage from "../../../public/images/acapulcoW.png";
import projectImage3 from "../../../public/images/acapulco/merch.webp";
import projectImage4 from "../../../public/images/acapulco/servicios2.webp";
import projectImage5 from "../../../public/images/acapulco/serviciosM3.webp";
import leftA from "../../../public/icons/left-chev.svg";
import rightA from "../../../public/icons/right-chev.svg";

function Acapulcoenlapiel() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, // Animation triggers only once
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true, // Animation triggers only once
  });

  return (
    <Layout title={"Work"}>
      <motion.div className={styles.hero}>
        <div className={styles.hero__container}>
          <h1 className={styles.hero__h1}>Acapulco En La Piel.</h1>
          <div className={styles.hero__textWrap}>
            <span className={styles.hero__span}></span>
            <p className={styles.hero__subtitle}>Next.js & Strapi. </p>
          </div>
          <p className={styles.hero__info}>
            Website developed to promote Acapulco tourism and the &quot;Acapulco
            En La Piel&quot; YouTube channel.
          </p>

          <button className={styles.button}>
            <Link href={"https://www.acapulcoenlapiel.com/"}> Visit Site </Link>
          </button>
        </div>

        <div className={styles.project}>
          <Image
            className={styles.projectImage}
            src={projectImage}
            alt="Acapulco en la piel project"
            height={300}
            width={300}
            priority={true}
          />
        </div>
      </motion.div>

      <main className={`section ${styles.main}`}>
        <div className={styles.briefingWrapper}>
          <div className={styles.briefing}>
            <motion.h2
              initial={{ opacity: 0, y: 15 }} // Initial state: invisible
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 15 }} // Animation state: visible if in view, otherwise invisible and y position at -15
              transition={{ delay: 0.2, duration: 0.6 }}
              className={styles.title__h2}
            >
              The briefing.
            </motion.h2>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 15 }} // Initial state: invisible
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 15 }} // Animation state: visible if in view, otherwise invisible and y position at -15
              transition={{ delay: 0.4, duration: 0.6 }}
              className={styles.briefing__p}
            >
              Acapulco En La Piel is a project where Diego aims to promote
              hotels, restaurants, and services to his YouTube audience,
              engaging new people and providing advice on the must-visit places
              when exploring Acapulco, Guerrero.
            </motion.p>
          </div>

          <motion.div
            className={styles.image__div}
            initial={{ opacity: 0, y: 15 }} // Initial state: invisible
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 15 }} // Animation state: visible if in view, otherwise invisible and y position at -15
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Image
              src={projectImage3}
              alt="Acapulco en la piel Screenshot"
              className={styles.project__img}
            />
          </motion.div>
        </div>
        
        <motion.div
          className={styles.imgfull__wrapper}
          ref={ref2}
          initial={{ opacity: 0 }} // Initial state: invisible
          animate={{ opacity: inView2 ? 1 : 0 }} // Animation state: visible if in view, otherwise invisible and y position at -15
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Image
            src={projectImage4}
            alt="Acapulco en la piel S+creenshot"
            className={styles.project__imgfull}
            width={1920}
            height={1280}
            
          />
        </motion.div>

        <div className={styles.solution} ref={ref3}>
          <div className={styles.solution__wrapper}>
            <motion.h2
              initial={{ opacity: 0, y: 15 }} // Initial state: invisible
              animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 15 }} // Animation state: visible if in view, otherwise invisible and y position at -15
              transition={{ delay: 0.2, duration: 0.6 }}
              className={styles.title__h2}
            >
              The solution.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }} // Initial state: invisible
              animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 15 }} // Animation state: visible if in view, otherwise invisible and y position at -15
              transition={{ delay: 0.5, duration: 0.6 }}
              className={styles.solution__p}
            >
              I utilized Next.js for the front-end and chose Strapi as the
              back-end solution to address the customer's needs. Strapi's ease
              of setup and user-friendly interface played a key role in the
              decision. This project remains a work in progress as we strive to
              meet Diego's request for a beta version to be launched promptly.
            </motion.p>
          </div>

          <Image
            src={projectImage5}
            alt="Acapulco en la piel Screenshot"
            className={styles.solution__img}
            width={320}
            height={320}
          />
        </div>
        <div className={styles.buttons__div}>
          <Link className={styles.link__wrapper} href={"/projects"}>
            <Image
              className={styles.arrow}
              src={leftA}
              alt="Back to work arrow"
              width={35}
              height={35}
            />
            <p className={styles.button__txt}>Back to Work.</p>
          </Link>

          <Link
            className={styles.link__wrapper}
            href={"/work/acapulcoenlapiel"}
          >
            <p className={styles.button__txt}>Next.</p>
            <Image
              className={styles.arrow}
              src={rightA}
              alt="Next arrow"
              width={35}
              height={35}
            />
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export default Acapulcoenlapiel;
