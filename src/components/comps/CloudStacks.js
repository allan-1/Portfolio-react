import React from 'react';
import {
  SiHeroku,
  SiAmazonaws,
  SiGooglecloud,
  SiMicrosoftazure,
  SiDocker,
  SiSentry,
  SiGithubactions,
} from 'react-icons/si';
import { FaCaretRight } from 'react-icons/fa';
import Lottie from 'react-lottie';
import stackslotties from '../lotties/cloudlottie.json';
import { CloudContent } from '../contents';
import styles from '../../styles/techs.module.css';

function Cloudstack() {
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
          <div className={styles.stacktitle}> Cloud Infrastructure</div>
          <div className={styles.cstackicons}>
            <SiHeroku />
            <SiAmazonaws />
            <SiMicrosoftazure />
            <SiGooglecloud />
            <SiDocker />
            <SiSentry />
            <SiGithubactions />
          </div>
          {CloudContent.map((content) => (
            <div className={styles.content}>
              <FaCaretRight /> {content.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cloudstack;
