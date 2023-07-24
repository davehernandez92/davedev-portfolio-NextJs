import React, { useState } from 'react';
import styles from '../../styles/form.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [projectDetails, setProjectDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // You can send form data to the server or perform any desired action

    // Reset form fields
    setName('');
    setEmail('');
    setTimeframe('');
    setProjectDetails('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formgroup}>
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.formgroup}>
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.formgroup}>
        <label htmlFor="timeframe" className={styles.label}>Timeframe:</label>
        <select
          id="timeframe"
          name="timeframe"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          required
          className={styles.select}
        >
          <option value="">Select a timeframe</option>
          <option value="2-4 weeks">2-4 weeks</option>
          <option value="1-2 months">1-2 months</option>
          <option value="more than 2 months">More than 2 months</option>
        </select>
      </div>
      <div className={styles.formgroup}>
        <label htmlFor="project-details" className={styles.label}>Tell me about your project:</label>
        <textarea
          id="project-details"
          name="project-details"
          value={projectDetails}
          onChange={(e) => setProjectDetails(e.target.value)}
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
