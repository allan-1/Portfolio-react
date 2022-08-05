import React from 'react';
import {
  FaAndroid,
  FaApple,
  FaJava,
  FaGoogle,
  FaCaretRight,
} from 'react-icons/fa';
import Lottie from 'react-lottie';
import mobilelottie from '../lotties/mobilelottie.json';
import { Mobiledevelopment } from '../contents';
import styles from '../../styles/techs.module.css';

function MobileStacks() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mobilelottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <div className={styles.techs}>
        <div className={styles.row}>
          <div className={styles.lottie}>
            <Lottie options={defaultOptions} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.stacktitle}> Mobile Development</div>
          <div className={styles.mstackicons}>
            <FaAndroid />
            <FaApple />
            <FaJava />
            <FaGoogle />
          </div>
          {Mobiledevelopment.map((content) => (
            <div className={styles.content}>
              <FaCaretRight /> {content.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileStacks;
