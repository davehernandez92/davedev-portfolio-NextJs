import { motion } from "framer-motion"
import Link from "next/link"
import Layout from "./components/layout"
import styles from '@/styles/home.module.css'
import Hero from "./components/hero"



export default function Home() {
  return (
    <>
    <Layout title={"Home"}>
      <Hero/>
      <section className={styles.aboutSection}>
      <motion.div>
        <h2 className={styles.heading }>
          Hi there!, I am a Halifax-based front-end developer with a passion for tech. Skilled
          graduate of Skills for Hire and Npower Canada. Coffee and nature
          enthusiast{" "}
        </h2>

        <button className={styles.button}>
            <Link href="/about">More About Me</Link>
        </button>

      </motion.div>
      </section>
    </Layout>
     
    </>
  )
}
