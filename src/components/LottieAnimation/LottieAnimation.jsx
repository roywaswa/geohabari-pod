"use client"
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styles from './LottieAnimation.module.scss';

const LottieAnimation = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      useFrameInterpolation: true,
      path: 'https://lottie.host/7969da23-7188-44e3-8405-f0c8625c26b1/I4e2k84cqk.json'
    });
    return () => {
      lottie.destroy()
    }
  }, []);

  return (
  <div className={styles.LottieAnimation} data-testid="LottieAnimation">
    <div id="animation_container" ref={animationContainer}></div>
  </div>
)};

export default LottieAnimation;
