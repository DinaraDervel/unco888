'use client';

import { useTranslations } from 'next-intl';
import { useState, useRef, useEffect } from 'react';
import styles from './feedback.module.scss';
import Button from '../Button/Button';
import FeedbackCard from './FeedbackCard/FeedbackCard';

function Feedback() {
  const t = useTranslations('feedback');
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [cardWidth, setCardWidth] = useState(423);

  const feedbacks = [
    {
      name: 'Name1',
      age: 'age',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
    },
    {
      name: 'Name2',
      age: 'age',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
    },
    {
      name: 'Name3',
      age: 'age',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
    },
    {
      name: 'Name4',
      age: 'age',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
    },
    {
      name: 'Name5',
      age: 'age',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
    },
    {
      name: 'Name6',
      age: 'age',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
    },
  ];

  useEffect(() => {
    const updateSliderSettings = () => {
      const width = window.innerWidth;
      if (width >= 1920) {
        setVisibleCards(4);
        setCardWidth(423);
      } else if (width >= 1024) {
        setVisibleCards(2);
        setCardWidth(423);
      } else if (width >= 760) {
        setVisibleCards(2);
        setCardWidth(330);
      } else {
        setVisibleCards(1);
        setCardWidth(276);
      }
    };

    updateSliderSettings();
    window.addEventListener('resize', updateSliderSettings);
    return () => window.removeEventListener('resize', updateSliderSettings);
  }, []);

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
        <hr className={styles.line}></hr>
        <h3 className={styles.subtitle}>{t('subtitle')}</h3>
      </div>
      <div className={styles.cards__wrapper}>
        <button
          className={styles.cards__button}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        />
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
        <button
          className={styles.cards__button}
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
        />
        <div className={styles.cards__btns}>
          <button
            className={styles.cards__btn}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          />
          <button
            className={styles.cards__btn}
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
          />
        </div>
      </div>
      <div className={styles.button}>
        <Button text={t('button_text')} link='' />
      </div>
    </div>
  );
}

export default Feedback;
