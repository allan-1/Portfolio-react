import React from 'react';
import styles from '../../styles/techs.module.css';
import Cloudstack from '../comps/CloudStacks';
import Fullstack from '../comps/Fullstack';
import MobileStacks from '../comps/Mobilestacks';

function Techs() {
  return (
    <div className={styles.Tech}>
      <div className={styles.techstacks}>
        <div className={styles.intro}>What I do</div>
        <Fullstack />
        <MobileStacks />
        <Cloudstack />
      </div>
    </div>
  );
}

export default Techs;
