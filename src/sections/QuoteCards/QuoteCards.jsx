import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuoteCards.module.scss';
import Image from 'next/image';

export default function QuoteCards(){

  const quote_cards = [
    'https://placehold.co/400x400.png',
    'https://placehold.co/400x400.png',
    'https://placehold.co/400x400.png',
    'https://placehold.co/400x400.png',
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
    </section>
  )
}