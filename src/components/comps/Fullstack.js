import React from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaNpm,
  FaCaretRight,
} from 'react-icons/fa';
import Lottie from 'react-lottie';
import stackslotties from '../lotties/stackslottie.json';
import { FullstackContent } from '../contents';
import styles from '../../styles/techs.module.css';

function Fullstack() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: stackslotties,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <div className={styles.techs}>
        <div className={styles.lottie}>
          <Lottie options={defaultOptions} />
        </div>
        <div className={styles.row}>
          <div className={styles.stacktitle}> Full Stack Development</div>
          <div className={styles.stackicons}>
            <FaHtml5 />
            <FaCss3 />
            <FaJs />
            <FaNodeJs />
            <FaNpm />
            <FaReact />
            <FaDatabase />
          </div>
          {FullstackContent.map((content) => (
            <div className={styles.content}>
              <FaCaretRight /> {content.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fullstack;
