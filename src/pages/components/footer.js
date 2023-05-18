/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import styles from '../../styles/footer.module.css'




export default function Footer() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const listItemVariants = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__contact}>
          <motion.h2 className={styles.footer__heading} ref={ref}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 0.4, duration: .5 }}
          >
          Let's design something<span className={styles.footer__span}>together?</span></motion.h2>
          <button className={styles.button}>
            <Link href="/contact">Contact Me</Link>
          </button>
        </div>

        <div className={styles.socials}>
          <motion.h2 className={styles.socials__heading} ref={ref}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 0.4, duration: .5 }}
          >You can find me on <span className={styles.footer__span2}>social media</span>:</motion.h2>
          <ul className={styles.socials__list}>
            <Link href="/contact"><motion.p whileHover={{ letterSpacing: '0.4rem', color: '#CCCC33', transition: { duration: 0.4 } }}>LinkedIn</motion.p></Link>
            <Link href="/contact"><motion.p whileHover={{ letterSpacing: '0.4rem', color: '#CCCC33', transition: { duration: 0.4 } }}>Instagram</motion.p></Link>
            <Link href="/contact"><motion.p whileHover={{ letterSpacing: '0.4rem', color: '#CCCC33', transition: { duration: 0.4 } }}>Facebook</motion.p></Link>
          </ul>
        </div>

      </div>
      <div className={styles.copyright}>
        <p>Copyright &copy; 2023 Dave Dev. All rights reserved.</p>
      </div>
    </footer>

  )
}
