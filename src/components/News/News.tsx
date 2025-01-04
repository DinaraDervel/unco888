import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { cn } from '@/functions/cn';
import styles from './news.module.scss';

function News() {
  const t = useTranslations('news');
  const socials = [
    'https://www.facebook.com/share/g/D2K3RZ7RDtemx9Tq',
    'https://www.instagram.com/uff_eu',
    'https://t.me/UNCOFOODFUTURES_eng',
    'https://www.linkedin.com/company/unco-club',
    'https://twitter.com/UncoClub',
    'https://www.youtube.com/@UNCOFoodFutures',
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span>UNKO</span> {t('title')}
      </h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.card__badges}>
            <div className={styles.card__badge}>SPACE</div>
            <div className={styles.card__badge}>SPACE</div>
            <div className={styles.card__badge}>SPACE</div>
          </div>
          <h3 className={styles.card__title}>Velitsodales egetonec.</h3>
          <div className={styles.card__image}></div>
          <p className={styles.card__text}>
            Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare
            accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.
          </p>
          <div className={styles.card__bottom}>
            <p className={styles.card__caption}>LOUIS NELSON / JULY 10, 2022</p>
            <div className={styles.socials__wrapper}>
              {socials.map((item, i) => (
                <Link
                  key={`${i}_${item}`}
                  className={cn(styles.socials__link, styles[`socials__icon_${i + 1}`])}
                  href={item}
                  target='_blank'
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card__badges}>
            <div className={styles.card__badge}>SPACE</div>
            <div className={styles.card__badge}>SPACE</div>
            <div className={styles.card__badge}>SPACE</div>
          </div>
          <h3 className={styles.card__title}>Velitsodales egetonec.</h3>
          <div className={styles.card__image}></div>
          <p className={styles.card__text}>
            Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare
            accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.
          </p>
          <div className={styles.card__bottom}>
            <p className={styles.card__caption}>LOUIS NELSON / JULY 10, 2022</p>
            <div className={styles.socials__wrapper}>
              {socials.map((item, i) => (
                <Link
                  key={`${i}_${item}`}
                  className={cn(styles.socials__link, styles[`socials__icon_${i + 1}`])}
                  href={item}
                  target='_blank'
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card__badges}>
            <div className={styles.card__badge}>SPACE</div>
            <div className={styles.card__badge}>SPACE</div>
            <div className={styles.card__badge}>SPACE</div>
          </div>
          <h3 className={styles.card__title}>Velitsodales egetonec.</h3>
          <div className={styles.card__image}></div>
          <p className={styles.card__text}>
            Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare
            accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.
          </p>
          <div className={styles.card__bottom}>
            <p className={styles.card__caption}>LOUIS NELSON / JULY 10, 2022</p>
            <div className={styles.socials__wrapper}>
              {socials.map((item, i) => (
                <Link
                  key={`${i}_${item}`}
                  className={cn(styles.socials__link, styles[`socials__icon_${i + 1}`])}
                  href={item}
                  target='_blank'
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card__badges}>
            <div className={styles.card__badge}>SPACE</div>
            <div className={styles.card__badge}>SPACE</div>
            <div className={styles.card__badge}>SPACE</div>
          </div>
          <h3 className={styles.card__title}>Velitsodales egetonec.</h3>
          <div className={styles.card__image}></div>
          <p className={styles.card__text}>
            Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare
            accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.
          </p>
          <div className={styles.card__bottom}>
            <p className={styles.card__caption}>LOUIS NELSON / JULY 10, 2022</p>
            <div className={styles.socials__wrapper}>
              {socials.map((item, i) => (
                <Link
                  key={`${i}_${item}`}
                  className={cn(styles.socials__link, styles[`socials__icon_${i + 1}`])}
                  href={item}
                  target='_blank'
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.card__badges}>
            <div className={styles.card__badge}>SPACE</div>
            <div className={styles.card__badge}>SPACE</div>
            <div className={styles.card__badge}>SPACE</div>
          </div>
          <h3 className={styles.card__title}>Velitsodales egetonec.</h3>
          <div className={styles.card__image}></div>
          <p className={styles.card__text}>
            Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare
            accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan. Nnibh ornare accumsan.
          </p>
          <div className={styles.card__bottom}>
            <p className={styles.card__caption}>LOUIS NELSON / JULY 10, 2022</p>
            <div className={styles.socials__wrapper}>
              {socials.map((item, i) => (
                <Link
                  key={`${i}_${item}`}
                  className={cn(styles.socials__link, styles[`socials__icon_${i + 1}`])}
                  href={item}
                  target='_blank'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
