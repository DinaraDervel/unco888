import { useTranslations } from 'next-intl';
import styles from './news.module.scss';
import NewsCard from '../NewsCard/NewsCard';

function News() {
  const t = useTranslations('news');

  const newsData = [
    {
      title: 'Velitsodales egetonec.',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
      caption: 'LOUIS NELSON / JULY 10, 2022',
    },
    {
      title: 'Velitsodales egetonec.',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
      caption: 'LOUIS NELSON / JULY 10, 2022',
    },
    {
      title: 'Velitsodales egetonec.',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
      caption: 'LOUIS NELSON / JULY 10, 2022',
    },
    {
      title: 'Velitsodales egetonec.',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
      caption: 'LOUIS NELSON / JULY 10, 2022',
    },
    {
      title: 'Velitsodales egetonec.',
      text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
      caption: 'LOUIS NELSON / JULY 10, 2022',
    },
  ];

  return (
    <div className={styles.container} id='news'>
      <h2 className={styles.title}>
        <span>UNCO</span> {t('title')}
      </h2>
      <div className={styles.slider}>
        <div className={styles.cards}>
          {newsData.map((news, index) => (
            <NewsCard key={index} title={news.title} text={news.text} caption={news.caption} />
          ))}
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}></button>
          <button className={styles.button}></button>
        </div>
      </div>
    </div>
  );
}

export default News;

// 'use client';

// import React, { useRef } from 'react';
// import { useTranslations } from 'next-intl';
// import styles from './news.module.scss';
// import NewsCard from '../NewsCard/NewsCard';

// interface NewsItem {
//   title: string;
//   text: string;
//   caption: string;
// }

// const News: React.FC = () => {
//   const t = useTranslations('news');
//   const sliderRef = useRef<HTMLDivElement | null>(null); // Типизация рефа для div

//   const newsData: NewsItem[] = [
//     {
//       title: 'Velitsodales egetonec.',
//       text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
//       caption: 'LOUIS NELSON / JULY 10, 2022',
//     },
//     {
//       title: 'Velitsodales egetonec.',
//       text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
//       caption: 'LOUIS NELSON / JULY 10, 2022',
//     },
//     {
//       title: 'Velitsodales egetonec.',
//       text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
//       caption: 'LOUIS NELSON / JULY 10, 2022',
//     },
//     {
//       title: 'Velitsodales egetonec.',
//       text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
//       caption: 'LOUIS NELSON / JULY 10, 2022',
//     },
//     {
//       title: 'Velitsodales egetonec.',
//       text: 'Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.',
//       caption: 'LOUIS NELSON / JULY 10, 2022',
//     },
//   ];

//   const handleScroll = (direction: 'left' | 'right') => {
//     const slider = sliderRef.current;
//     if (slider) {
//       const scrollAmount = slider.offsetWidth; // Прокрутка на ширину видимой области
//       slider.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className={styles.container} id='news'>
//       <h2 className={styles.title}>
//         <span>UNCO</span> {t('title')}
//       </h2>
//       <div className={styles.slider}>
//         {/* Контейнер для карточек */}
//         <div className={styles.cards} ref={sliderRef}>
//           {newsData.map((news, index) => (
//             <NewsCard key={index} title={news.title} text={news.text} caption={news.caption} />
//           ))}
//         </div>
//         {/* Кнопки навигации */}
//         <div className={styles.buttons}>
//           <button
//             className={`${styles.button} ${styles.leftButton}`}
//             onClick={() => handleScroll('left')}
//             aria-label='Previous'
//           ></button>
//           <button
//             className={`${styles.button} ${styles.rightButton}`}
//             onClick={() => handleScroll('right')}
//             aria-label='Next'
//           ></button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;
