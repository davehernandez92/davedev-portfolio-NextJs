import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from "./components/layout"
import HeroWork from './components/heroWork'
import styles from '../styles/projects.module.css'
import image1 from '../../public/images/acapulcoEnlaPiel.jpg'

export default function Projects() {
  // State to track the currently selected filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Function to handle filter selection
  const handleFilterSelection = (filter) => {
    setActiveFilter(filter);
  };

  // Filtered projects based on the active filter
  const filteredProjects = [
    // Replace this with your actual project data and filter accordingly
    {
      title: 'Project 1',
      category: 'Front-End',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'images/acapulco.png'

    },
    {
      title: 'Project 2',
      category: 'PWA',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'images/acapulco.png'

    },
    {
      title: 'Project 3',
      category: 'Python',
      description: 'Lorem ipsum dolor sit amet',
      imageUrl: 'images/acapulco.png'

    },
    // Add more projects here
  ].filter((project) => activeFilter === 'All' || project.category === activeFilter);

  return (
    <Layout>
      <HeroWork />

      <section>
        <ul className={styles.workFilter}>
          <li
            className={`${styles.workFilter} ${activeFilter === 'All' ? styles.active__work : ''}`}
            onClick={() => handleFilterSelection('All')}
          >
            All
          </li>
          <li
            className={`${styles.workFilter} ${activeFilter === 'Front-End' ? styles.active__work : ''}`}
            onClick={() => handleFilterSelection('Front-End')}
          >
            Front-End
          </li>
          <li
            className={`${styles.workFilter} ${activeFilter === 'PWA' ? styles.active__work : ''}`}
            onClick={() => handleFilterSelection('PWA')}
          >
            PWA
          </li>
          <li
            className={`${styles.workFilter} ${activeFilter === 'Python' ? styles.active__work : ''}`}
            onClick={() => handleFilterSelection('Python')}
          >
            Python
          </li>
        </ul>

        <div className={styles.projects}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.project}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            <Image
                src={`/images/${project.imageUrl.replace(/\\/g, '/')}`}
                alt={project.title}
                width={300}
                height={200}
              />
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

