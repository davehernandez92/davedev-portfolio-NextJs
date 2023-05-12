/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import styles from '../../styles/skills.module.css'
import { IoLogoJavascript, IoLogoCss3,IoLogoPython} from "react-icons/io";
import { SiTailwindcss, SiNextdotjs,SiStrapi, SiPrisma,SiAmazonaws, SiRemix, SiMongodb, SiGraphql} from "react-icons/si";
import {  FaReact,FaNodeJs,FaGitAlt } from 'react-icons/fa';

export default function Skills() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
    const listItemVariants = {
        initial: { opacity: 0, x: -25 },
        animate: { opacity: 1, x: 0 }
      };
  return (
    <div className={styles.skillSection}>
      <motion.div className={styles.skills__wrap}>
        <h2 className={styles.skills__heading}>Here's my tech kit: </h2>

        <motion.ul className={styles.skillset} ref={ref}>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 0, duration: .5 }}
          >
            <IoLogoJavascript className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 0.2, duration: .5  }}
          >
            <IoLogoCss3 className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 0.35, duration: .5  }}
          >
            <SiTailwindcss className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 0.5, duration: .5  }}
          >
            <FaReact className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 0.65, duration: .5  }}
          >
            <SiNextdotjs className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 0.8, duration: .5  }}
          >
            <SiRemix className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: .95, duration: .5  }}
          >
            <SiStrapi className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 1.1, duration: .5  }}
          >
            <SiPrisma className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 1.25, duration: .5  }}
          >
            <FaNodeJs className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 1.4, duration: .5  }}
          >
            <SiMongodb className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 1.55, duration: .5  }}
          >
            <SiGraphql className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 1.7, duration: .5  }}
          >
            <SiAmazonaws className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 1.85, duration: .5  }}
          >
            <FaGitAlt className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 2, duration: .5  }}
          >
            <IoLogoPython className="skillsIcon" />
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
}
