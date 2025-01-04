'use client';

import { useTranslations } from 'next-intl';
import { useState, useRef } from 'react';
import styles from './feedback.module.scss';
import Button from '../Button/Button';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

function Feedback() {
  const t = useTranslations('feedback');
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;
  const cardWidth = 405 + 18;

  const feedbacks = [
    {
      name: 'Name',
      age: 'age',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
    },
    {
      name: 'Name',
      age: 'age',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
    },
    {
      name: 'Name',
      age: 'age',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
    },
    {
      name: 'Name',
      age: 'age',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
    },
    {
      name: 'Name',
      age: 'age',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
    },
    {
      name: 'Name',
      age: 'age',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
    },
  ];

  const maxIndex = feedbacks.length - visibleCards;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : prevIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>UNCO</h2>
        <h3 className={styles.subtitle}>{t('subtitle')}</h3>
      </div>
      <div className={styles.cards__wrapper}>
        <button className={styles.cards__button} onClick={handlePrev}></button>
        <div className={styles.cards__viewport}>
          <div
            ref={sliderRef}
            className={styles.cards}
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {feedbacks.map((feedback, index) => (
              <FeedbackCard
                key={index}
                name={feedback.name}
                age={feedback.age}
                text={feedback.text}
              />
            ))}
          </div>
        </div>
        <button className={styles.cards__button} onClick={handleNext}></button>
      </div>
      <div className={styles.button}>
        <Button text={t('button_text')} link='' font='clamp(16px, 1.302vw, 25px)' />
      </div>
    </div>
  );
}

export default Feedback;
