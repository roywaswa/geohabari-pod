import React from 'react';
import styles from './QuoteCards.module.scss';
import Image from 'next/image';

export default function QuoteCards(){

  const quote_cards = [
    '/quotes/IMG-20250606-WA0008.jpg',
    '/quotes/IMG-20250606-WA0009.jpg',
    '/quotes/IMG-20250606-WA0010.jpg',
    '/quotes/IMG-20250606-WA0011.jpg',
    '/quotes/IMG-20250606-WA0012.jpg',
    '/quotes/IMG-20250606-WA0013.jpg',
    '/quotes/IMG-20250606-WA0013.jpg',
  ]

  return (
    <section className={styles.QuoteCards}>
      <div className={styles.section_intro}>
        <h3>Statements that reorganized our brain chemistry ... “</h3>
      </div>
      {quote_cards.map((card, index) => (
        <div key={index} className="img_container">
          <Image src={card} alt='' width={400} height={400} />
        </div>
      ))}
      {/* <div className={styles.contourImageContainer}>
        <Image
          src="/images/contour.png"
          alt='Contour decoration'
          width={1000}
          height={100}
          className={styles.contourImage}
        />
      </div> */}
    </section>
  )
}