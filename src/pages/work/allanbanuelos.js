/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useInView } from "react-intersection-observer";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../../styles/work.module.css";
import projectImage from "../../../public/images/allan/logo-allanw.svg";
import projectImage2 from "../../../public/images/allan/allanlap.png";

import projectImage3 from "../../../public/images/allan/allanPhone.png";
import leftA from "../../../public/icons/left-chev.svg";
import rightA from "../../../public/icons/right-chev.svg";

function Allanbanuelos() {
  
  return (
    <Layout title={"Work"}>
      <motion.div className={styles.hero}>
        <div className={styles.hero__container}>
          <h1 className={styles.hero__h1}>Allan Wedding Photography.</h1>
          <div className={styles.hero__textWrap}>
            <span className={styles.hero__span}></span>
            <p className={styles.hero__subtitle}>Next.js & Tailwind CSS. </p>
          </div>
          <p className={styles.hero__info}>
            Website developed for a Wedding photographer in Acapulco, Mexico.
          </p>

          <button className={styles.button}>
            <Link target="blank" href={"https://www.allanbanuelos.com/"}>
              {" "}
              Visit Site{" "}
            </Link>
          </button>
        </div>

        <div className={styles.project}>
          <Image
            className={styles.projectImage}
            src={projectImage}
            alt="Allan Banuelos project"
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className={styles.title__h2}
            >
              The briefing.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }} // Initial state: invisible
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className={styles.briefing__p}
            >
              In crafting Allan's wedding photography website in Acapulco,
              Mexico, the objective was to address specific needs and challenges
              outlined by Allan. He sought a solution that not only positioned
              him favorably within the competitive landscape but also enhanced
              his online presence, credibility, and professionalism.
            </motion.p>
          </div>

          <motion.div
            className={styles.image__div}
            initial={{ opacity: 0, y: 15 }} // Initial state: invisible
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Image
              src={projectImage2}
              alt="Allan Website Screenshot"
              className={styles.project__img}
              width={800}
              height={534}
            />
          </motion.div>
        </div>

        <div className={styles.solutionWrapper}>
          <div className={styles.challenge}>
            <motion.h2
              initial={{ opacity: 0, y: 15 }} // Initial state: invisible
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className={styles.title__h2}
            >
              The challenge.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }} // Initial state: invisible
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Our main focus was around building credibility and
              professionalism. Allan understood the vital role of an online
              presence in fostering trust with potential clients. This went
              beyond just looks, requiring a platform that not only displayed
              his expertise but also radiated reliability, making it easy for
              clients to find and trust his services.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }} // Initial state: invisible
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Performance optimization became a focal point, placing a strong
              emphasis on rapid loading times. This approach was pivotal in
              ensuring a seamlessly navigable experience through Allan's
              portfolio.
            </motion.p>
            
          </div>

         
        </div>

        <div className={styles.solution} >
          <div className={styles.solution__wrapper}>
            <motion.h2
             initial={{ opacity: 0, y: 15 }} // Initial state: invisible
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className={styles.title__h2}
            >
              The solution.
            </motion.h2>
            <motion.p
             initial={{ opacity: 0, y: 15 }} // Initial state: invisible
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className={styles.solution__p}
            >
             The decision to employ Next.js as the framework for Allan's website was influenced by its capacity to address the unique challenge of image optimization. Faced with the intricate task of reconciling the desire for a fast-loading site with Allan's portfolio containing heavy, pixel-dense images, Next.js emerged as a strategic choice.
              
             
            </motion.p>
            
          </div>

          <Image
            src={projectImage3}
            alt="Acapulco en la piel Screenshot"
            className={styles.solution__img}
            width={230}
            height={490}
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

export default Allanbanuelos;
