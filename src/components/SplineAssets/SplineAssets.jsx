
import React from 'react';
import Spline from '@splinetool/react-spline/next';
import styles from './SplineAssets.module.scss';
import { useGSAP } from '@gsap/react';

export const SplineAssets = () => (
  <div className={styles.SplineAssets}>
    SplineAssets Component
  </div>
);

export function DataBase() {
  // useGSAP(() => {

  // })
  return (
    <div className={styles.database}>
      <Spline
        scene="https://prod.spline.design/5U7X-GijxoqF-qn2/scene.splinecode" 
        width={512}
        height={657}
      />
    </div>
  );
}


