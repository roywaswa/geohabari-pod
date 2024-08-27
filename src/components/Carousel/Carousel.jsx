// components/Carousel.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Carousel.module.scss';
import Image from 'next/image';

const Carousel = ({ episodes }) => {
    const [currentIndex, setCurrentIndex] = useState(0);    

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? episodes.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === episodes.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.carousel}>
            <div className={styles['carousel-wrapper']}>
                <AnimatePresence initial={false} custom={currentIndex}>
                    <motion.div
                        key={currentIndex}
                        className={styles['carousel-slide']}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image className={styles.carousel_image} fill
                          src={episodes[currentIndex].artwork_url} 
                          alt={episodes[currentIndex].title} 
                        />
                    </motion.div>
                </AnimatePresence>
                <button className={`${styles['carousel-control']} ${styles.prev}`} onClick={prevSlide}>❮</button>
                <button className={`${styles['carousel-control']} ${styles.next}`} onClick={nextSlide}>❯</button>
            </div>
            <div className={styles['carousel-indicators']}>
                {episodes.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
