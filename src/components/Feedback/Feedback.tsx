'use client';

import { useTranslations } from 'next-intl';
import { useState, useRef } from 'react';
import styles from './feedback.module.scss';
import Button3 from '@/components/Button3/Button3';
import FeedbackCard from './FeedbackCard/FeedbackCard';
import FeedbackForm from '@/components/FeedbackForm/FeedbackForm';

interface FeedbackItem {
  name: string;
  age: string;
  text: string;
}

const Feedback: React.FC = () => {
  const t = useTranslations('feedback');
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const feedbackData: FeedbackItem[] = [
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

  const handleScroll = (direction: 'left' | 'right') => {
    const slider = sliderRef.current;
    if (slider) {
      const scrollAmount = slider.offsetWidth / 2;
      slider.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          onClick={() => handleScroll('left')}
          aria-label='Previous'
        />
        <div className={styles.cards__viewport} ref={sliderRef}>
          <div className={styles.cards}>
            {feedbackData.map((feedback, index) => (
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
          onClick={() => handleScroll('right')}
          aria-label='Next'
        />
        <div className={styles.cards__btns}>
          <button
            className={styles.cards__btn}
            onClick={() => handleScroll('left')}
            aria-label='Previous'
          />
          <button
            className={styles.cards__btn}
            onClick={() => handleScroll('right')}
            aria-label='Next'
          />
        </div>
      </div>
      <Button3
        className={`${styles.button} ${styles.review}`}
        type='button'
        onClick={openModal}
        text={t('button_text')}
      />
      <FeedbackForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Feedback;
