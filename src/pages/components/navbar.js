/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { motion } from 'framer-motion';
import styles from '../../styles/navbar.module.css'

export default function Navbar() {
    const {pathname} = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isOnSection, setIsOnSection] = useState(false);




  const logoHoverAnimation = {
    scale: 1.1,
    transition: { duration: 0.5 },
  };

  const svgVariants = {
    open: {
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
    closed: {
      rotate: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 20,
        staggerChildren: 0.05,
        when: "afterChildren",
      },
    },
  };

  const pathVariants = {
    open1: {
      opacity: 1,
      y: 7.5,
      x: 1,
      rotate: 45,
      transition: {
        duration: 0.2,
      },
    },
    open2: {
      opacity: 0,
      x: 20,
      rotate: 0,
      transition: {
        duration: 0.3,
      },
    },
    open3: {
      opacity: 1,
      y: -7.5,
      rotate: -45,
      transition: {
        duration: 0.2,
      },
    },
    hover1: {
      y: -4,
      transition: {
        duration: 1.2,
        delay: 0.1,
      },
    },
    hover2: {
      x: -2,
      transition: {
        duration: 1.2,
        delay: 0.13,
      },
    },
    hover3: {
      y: 4,
      transition: {
        duration: 1.2,
        delay: 0.16,
      },
    },
    closed: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
    },
    hidden: {
      opacity: 0,
      x: -24,
      transition: {
        duration: 0.15,
      },
    },
  };

  const dropDmenuVariants = {
    menuOpen: {
      opacity: 1,
      y: 1500,
      transition: {
        duration: 0.6,
      },
    },
    menuClose: {
      opacity: 0,
      y: -1500,
      transition: {
        delay: 0.5,
        duration: 2.7,
      },
    },
  };
  const listMenuVariants = {
    fadeIn: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.7,
      },
    },
    fadeIn2: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.8,
      },
    },
    fadeIn3: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.9,
      },
    },
    fadeIn4: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1,
      },
    },
    fadeOut: {
      opacity: 0,
      y: -15,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  const menuInfoVariants = {
    fadeIn: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.5,
      },
    },
    fadeOut: {
      opacity: 0,
      x: -25,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 20,
        delay: 0.1,
      },
    },
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.getElementsByClassName('section');
      const navbarHeight = 110; // Set the navbar height to 110px
  
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
  
        if (!section) continue; // Skip if section element is undefined
  
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionBottom = sectionTop + section.offsetHeight;
  
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          setIsOnSection(true);
          return;
        }
      }
  
      setIsOnSection(false);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  
  
  
  return (
    <nav className={styles.navbar}>
      {/* Menu Icon  */}
      <Link href="/">
        <motion.div whileHover={logoHoverAnimation} className={styles.logoName}>
          <motion.h1
            className={styles.navbar__logo}
            whileHover={{ x: -3 }}
            transition={{ duration: 0.3 }}
            animate={{ color: isOnSection ? '#000' : '#fff' }}
          >
            Dave
          </motion.h1>
          <motion.h1
            className={styles.navbar__logo2}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.3 }}
          >
            Dev
          </motion.h1>
        </motion.div>
      </Link>
      {/* Hamburguer menu SVG  */}
      <div className={styles.menu__icon}>
        <motion.svg
          width="35px"
          height="35px"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={() => {
            setIsHover(false);
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <motion.path
              d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z"
              fill={isOnSection ? '#000' : '#fff'}
              variants={pathVariants}
              initial="closed"
              animate={isOpen ? "open1" : isHover ? "hover1" : "closed"}
            />
            <motion.path
              d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z"
              fill={isOnSection ? '#000' : '#fff'}
              variants={pathVariants}
              initial="closed"
              animate={isOpen ? "open2" : isHover ? "hover2" : "closed"}
            />
            <motion.path
              d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z"
              fill={isOnSection ? '#000' : '#fff'}
              variants={pathVariants}
              initial="closed"
              animate={isOpen ? "open3" : isHover ? "hover3" : "closed"}
            />
          </g>
        </motion.svg>
      </div>
      {/* Drop Down menu */}
      <motion.div
        variants={dropDmenuVariants}
        initial="menuClose"
        animate={isOpen ? "menuOpen" : "menuClose"}
        className={styles.menu}
      >
        <motion.div className={styles.menu__wrap}>

          {/* Drop down Menu List  */}
          <motion.ul className={styles.menu__ul}
            variants={listMenuVariants}
            initial="fadeOut"
            animate={isOpen ? "fadeIn" : "fadeOut"}
          >
            <motion.li
              variants={listMenuVariants}
              initial="fadeOut"
              animate={isOpen ?  "fadeIn" : "fadeOut"}
            >
              <Link
                href="/"
                className={`${styles.menu__txt} ${
                  pathname === "/" ? "currentLink" : ""
                }`}
              >
                Home
              </Link>
            </motion.li>
            
            <motion.li
              variants={listMenuVariants}
              initial="fadeOut"
              animate={isOpen ?  "fadeIn2" : "fadeOut"}
            >
              <Link
                href="/projects"
                className={`${styles.menu__txt} ${
                  pathname === "/projects" ? "currentLink" : ""
                }`}
              >
                {" "}
                Projects
              </Link>
            </motion.li>
            
            <motion.li
              variants={listMenuVariants}
              initial="fadeOut"
              animate={isOpen ?  "fadeIn3" : "fadeOut"}
            >
              <Link
                href="/about"
                className={`${styles.menu__txt} ${
                  pathname === "/about" ? "currentLink" : ""
                }`}
              >

                {" "}
                About
              </Link>
            </motion.li>

            <motion.li
              variants={listMenuVariants}
              initial="fadeOut"
              animate={isOpen ?  "fadeIn4" : "fadeOut"}
            >
              <Link
                href="/contact"
                className={`${styles.menu__txt} ${
                  pathname === "/contact" ? "currentLink" : ""
                }`}
              >
                Contact
              </Link>
            </motion.li>

          </motion.ul>
          
          {/* Drop Down menu Info */}
          <motion.div className={styles.menu__info}
            variants={menuInfoVariants}
            initial="fadeOut"
            animate={isOpen ? "fadeIn" : "fadeOut"}
          >
            <motion.h2 className={styles.menu__h2}>
              Hey, Do you wanna chat?{" "}
            </motion.h2>
            <motion.p className={styles.menu__p}>
              Let's bring your ideas to life - contact me to get started!
            </motion.p>
            <motion.button className='button'>
              <Link href="/contact">Contact Me</Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </nav>
  );
}
