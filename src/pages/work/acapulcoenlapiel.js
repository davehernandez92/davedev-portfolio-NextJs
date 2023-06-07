import React from "react";
import { useInView } from "react-intersection-observer";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../../styles/work.module.css";
import projectImage from "../../../public/images/acapulcoW.png";
import projectImage2 from "../../../public/images/acapulco/hotel1.webp";
import projectImage3 from "../../../public/images/acapulco/merch.webp";
import projectImage4 from "../../../public/images/acapulco/servicios2.webp";
import projectImage5 from "../../../public/images/acapulco/galeria.webp";
import leftA from "../../../public/icons/left-chev.svg";
import rightA from "../../../public/icons/right-chev.svg";

function Acapulcoenlapiel() {
  const [ref, inView] = useInView({
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
            Website developed to promote Acapulco Tourism and Acapulco En La
            Piel Youtube channel.
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
        <div className={styles.briefing} ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 15 }} // Initial state: invisible
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 15 }} // Animation state: visible if in view, otherwise invisible and y position at -15
            transition={{ delay: 0.2, duration: 0.6 }}
            className={styles.title__h2}
          >
            The briefing.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }} // Initial state: invisible
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 15 }} // Animation state: visible if in view, otherwise invisible and y position at -15
            transition={{ delay: 0.4, duration: 0.6 }}
            className={styles.briefing__p}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type
          </motion.p>
        </div>

        <div className={styles.image__div}>
          <Image
            src={projectImage2}
            alt="Acapulco en la piel Screenshot"
            width={320}
            height={320}
            className={styles.project__img}
          />
          <Image
            src={projectImage3}
            alt="Acapulco en la piel Screenshot"
            width={320}
            height={320}
            className={styles.project__img}
          />
        </div>
        <Image
          src={projectImage4}
          alt="Acapulco en la piel S+creenshot"
          width={320}
          height={320}
          className={styles.project__imgfull}
        />

        <div className={styles.solution}>
          <div className={styles.solution__wrapper}>
            <h2 className={styles.title__h2}>The solution.</h2>
            <p className={styles.solution__p}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
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
          <div>
          <Link href={'/'}>Back to Work.</Link>
          <Image src={leftA} alt="Back to work arrow" width={35} height={35}/>

          </div>
          <div>
          <Link href={'/'}>Next.</Link>
          <Image src={rightA} alt="Next arrow" width={35} height={35}/>

          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Acapulcoenlapiel;
