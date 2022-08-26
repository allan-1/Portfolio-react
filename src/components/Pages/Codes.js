import React from 'react';
import styles from '../../styles/codes.module.css';
import { PersonalProjects } from '../../lib/projects';
import Code from '../codes/code';

function Codes() {
  return (
    <div className={styles.codes}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder={`Search ${PersonalProjects.length} projects...`}
        />
      </div>
      <div className={styles.codeitems}>
        {PersonalProjects.map((code) => (
          <div className={styles.item}>
            <a href={code.link}>
              <Code
                projimg={code.images}
                projdesc={code.description}
                projtitle={code.name}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Codes;
