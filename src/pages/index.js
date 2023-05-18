import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import Link from "next/link"
import Layout from "./components/layout"
import styles from "../styles/index.module.css"
import Hero from "./components/hero"
import Skills from "./components/skills";
import Customers from "./components/customers";



export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
  });
  
  return (
    <>
      <Layout title={"Home"}>
        <Hero />
        <section className={` ${styles.aboutSection}`}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y:15 }} // Initial state: invisible
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 15 }} // Animation state: visible if in view, otherwise invisible and y position at -15
            transition={{ delay: 0.5, duration:.9 }} // Delay of 0.5s
          >
            <h2 className={styles.heading}>
              Hi there!, I am a Halifax-based front-end developer with a passion
              for tech. Skilled graduate of Skills for Hire and Npower Canada.
              Coffee and nature enthusiast{" "}
            </h2>

            <button className={styles.button}>
              <Link href="/about">More About Me</Link>
            </button>
          </motion.div>
        </section>
        <Skills/>
        <Customers/>
        
      </Layout>
    </>
  );
}
