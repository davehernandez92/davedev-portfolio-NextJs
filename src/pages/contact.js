/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Layout from "./components/layout"
import Form from './components/form';
import styles from '../styles/contact.module.css'

export default function Contact() {
  return (
    <Layout >
      <main className={styles.contact}>
        <div className={styles.contact__container}>
          <h1 className={styles.contact__h1}>
            Let's find solutions <span> together?</span>
          </h1>
          <div className={styles.contact__textWrap}>
            <span className={styles.contact__span}></span>
            <p className={styles.contact__subtitle}> Contact </p>
          </div>
          <p className={styles.contact__txt}>
            Hey there! fill in the form or just use my contacts below.
          </p>
          <p className={styles.contact__txt2}>
            If you need to put a project on the move, let's work on it!
          </p>
          <a className={styles.contact__email} href={`mailto:davehgal@gmail.com`}>davehgal@gmail.com</a>
        </div>
        <Form/>
        

        
      </main>
    </Layout>
  );
}
