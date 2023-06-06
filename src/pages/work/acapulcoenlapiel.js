import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../../styles/work.module.css"
import projectImage from "../../../public/images/acapulcoW.png";

function Acapulcoenlapiel() {
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
              <Link href={"https://www.acapulcoenlapiel.com/"}>
                {" "}
                Visit Site{" "}
              </Link>
            </button>
        </div>

        <div className={styles.project}>
          
            <Image
              className={styles.projectImage}
              src={projectImage}
              alt="Acapulco en la piel project"
              height={300}
              width={300}
            />

           
          
        </div>
      </motion.div>
    </Layout>
  );
}

export default Acapulcoenlapiel;
