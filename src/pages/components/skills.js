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
    <div className={`section ${styles.skillSection}`}>
      <motion.div className={styles.skills__wrap}>
        <h2 className={styles.skills__heading}>Here's my tech kit: </h2>

        <motion.ul className={styles.skillset} ref={ref}>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 0, duration: .45 }}
          >
            <IoLogoJavascript className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 0.1, duration: .45  }}
          >
            <IoLogoCss3 className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 0.2, duration: .45  }}
          >
            <SiTailwindcss className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 0.25, duration: .45  }}
          >
            <FaReact className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 0.3, duration: .45  }}
          >
            <SiNextdotjs className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: 0.35, duration: .45  }}
          >
            <SiRemix className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: .4, duration: .45  }}
          >
            <SiStrapi className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: .45, duration: .45  }}
          >
            <SiPrisma className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: .5, duration: .45  }}
          >
            <FaNodeJs className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: .5, duration: .45  }}
          >
            <SiMongodb className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: .5, duration: .45  }}
          >
            <SiGraphql className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: .5, duration: .45  }}
          >
            <SiAmazonaws className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: .5, duration: .45  }}
          >
            <FaGitAlt className="skillsIcon" />
          </motion.li>
          <motion.li className={styles.skillset__li}
            variants={listItemVariants}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            transition={{ delay: .5, duration: .45  }}
          >
            <IoLogoPython className="skillsIcon" />
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
}
