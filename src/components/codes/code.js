import React from 'react';
import styles from '../../styles/codes.module.css';

function Code({ projimg, projtitle, projdesc }) {
  return (
    <div className={styles.code}>
      <div className={styles.codeimg}>
        <img src={projimg} alt={projtitle} />
      </div>
      <div className={styles.codetitle}>{projtitle}</div>
      <div className={styles.codedesc}>{projdesc}</div>
    </div>
  );
}

export default Code;
