import React from 'react';
import styles from '../../styles/experience.module.css';
import { Experiences } from '../contents';

function Experience() {
  return (
    <div className={styles.experience}>
      <div className={styles.title}>Experience</div>
      <div className={styles.experiences}>
        {Experiences.map((exp) => (
          <div className={styles.expbox}>
            <div className={styles.coname}>{exp.company}</div>
            <div className={styles.position}>{exp.position}</div>
            <div className={styles.date}>{exp.dates}</div>
            <div className={styles.description}>{exp.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
