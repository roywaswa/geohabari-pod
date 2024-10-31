import React from 'react'
import styles from './PodcastChip.module.scss';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

function PodcastChip({icon, platform}) {
  return (
    <div className={styles.PodcastChip}>
      <div className={styles.pod_icon}>
        <Image src={icon} fill alt={platform} />
      </div>
      <div className={styles.pod_desc}>
        <p>Listen On</p>
        <h6>{platform}</h6>
      </div>
    </div>
  )
}

export default PodcastChip