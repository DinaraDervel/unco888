'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import NewsCard from '../NewsCard/NewsCard';
import NewsPopup from './NewsPopup/NewsPopup';
import styles from './news.module.scss';

interface NewsItem {
  text: string;
  caption: string;
}

const News: React.FC = () => {
  const t = useTranslations('news');
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const newsData: NewsItem[] = [
    {
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
      caption: 'LOUIS NELSON / JULY 10, 2022',
    },
    {
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
      caption: 'LOUIS NELSON / JULY 10, 2022',
    },
    {
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
      caption: 'LOUIS NELSON / JULY 10, 2022',
    },
    {
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
      caption: 'LOUIS NELSON / JULY 10, 2022',
    },
    {
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
      caption: 'LOUIS NELSON / JULY 10, 2022',
    },
  ];

  const toggleBodyScroll = (disable: boolean) => {
    if (disable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

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

  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const openPopup = (news: NewsItem) => {
    setSelectedNews(news);
  };

  const closePopup = () => {
    setSelectedNews(null);
  };

  useEffect(() => {
    toggleBodyScroll(!!selectedNews);
    return () => toggleBodyScroll(false);
  }, [selectedNews]);

  return (
    <div className={styles.container} id='news'>
      <h2 className={styles.title}>
        <span>UNCO</span> {t('title')}
      </h2>
      <div className={styles.slider}>
        <div className={styles.cards} ref={sliderRef}>
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              text={news.text}
              caption={news.caption}
              onClick={() => openPopup(news)}
            />
          ))}
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => handleScroll('left')}
            aria-label='Previous'
          />
          <button
            className={styles.button}
            onClick={() => handleScroll('right')}
            aria-label='Next'
          />
        </div>
      </div>
      {selectedNews && <NewsPopup news={selectedNews} onClose={closePopup} />}
    </div>
  );
};

export default News;
