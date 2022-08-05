import React from 'react';
import styles from '../../styles/project.module.css';
import { PersonalProjects } from '../contents';

function Project() {
  return (
    <div className={styles.project}>
      <div className={styles.title}>Personal Projects</div>
      <div className={styles.pdesc}>
        <div>Here are some of the personal projects that I have done</div>
      </div>
      <div className={styles.projects}>
        {PersonalProjects.map((proj) => (
          <div className={styles.pbox}>
            <img src={proj.images} alt={proj.name} />
            <div className={styles.pname}>{proj.name}</div>
            <div className={styles.desc}>{proj.description}</div>
            <div className={styles.link}>
              <a href={proj.link}>Link</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
