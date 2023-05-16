/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../../styles/footer.module.css'




export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__contact}>
          <h2 className={styles.footer__heading}>Let's design something<span className={styles.footer__span}>together?</span></h2>
          <button className={styles.button}>
            <Link href="/contact">Contact Me</Link>
          </button>
        </div>

        <div className={styles.socials}>
          <h2 className={styles.socials__heading}>You can find me on<span className={styles.footer__span2}>social media</span>:</h2>
          <ul className={styles.socials__list}>
            <Link href="/contact"><motion.p>LinkedIn</motion.p></Link>
            <Link href="/contact"><motion.p>Instagram</motion.p></Link>
            <Link href="/contact"><motion.p>Facebook</motion.p></Link>
          </ul>
        </div>

      </div>
      <div>
        <p>Build with </p>
        <p>Copyright &copy; 2023 Dave Dev. All rights reserved.</p>
      </div>
    </footer>

  )
}
