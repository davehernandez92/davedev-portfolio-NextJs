import React, { useState } from 'react';
import styles from '../../styles/form.module.css';
import axios from 'axios';


const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectDetails, setProjectDetails] = useState('');


  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleProjectDetailsChange = (e) => {
    setProjectDetails(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('boton');
    const data = {
      recipientEmail: email, // Replace with the recipient's email
      customer: name,
      text: `Name: ${name}\nProject Details: ${projectDetails}`,
    }
    try {
      const response = await axios.post('/api/sendEmail', data);
      console.log(response.data); // Optional: You can handle the response as per your requirements
      // Reset form fields
      setName('');
      setEmail('');
      setProjectDetails('');
    } catch (error) {
      console.error('Error occurred while sending email:', error);
      // Handle the error as per your requirements
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formgroup}>
        <label
          htmlFor="name"
          className={styles.label}
          style={{ display: name ? "none" : "block" }}
        >
          Name
        </label>{" "}
        <input
          type="text"
          id="name"
          name=""
          value={name}
          onChange={handleNameChange}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.formgroup}>
        <label
          htmlFor="email"
          className={styles.label}
          style={{ display: email ? "none" : "block" }}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formgroup}>
      <label
          htmlFor="project-details"
          className={styles.label}
          style={{ display: projectDetails ? 'none' : 'block' }}
        >
          Tell me about your project:
        </label>
        <textarea
          id="project-details"
          name="project-details"
          value={projectDetails}
          onChange={handleProjectDetailsChange}
          required
          className={styles.textarea}
        ></textarea>
      </div>
      <div className={styles.formgroup}>
        <button type="submit" className={styles.button}>
          Submit Form
        </button>
      </div>
    </form>
  );
};

export default Form;
