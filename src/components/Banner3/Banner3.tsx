'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './banner3.module.scss';
import Button from '../Button/Button';

function Banner3() {
  const t = useTranslations('banner3');
  return (
    <div className={styles.banner3}>
      <h1>{t('title')}</h1>
      <div className={styles.container}>
        <div className={styles.star}></div>
        <div className={styles.container__item}>
          <Image src='/images/Banner3/icon1.png' alt='icon1' width={84} height={84} />
          <div className={styles.container__item__text}>{t('text1')}</div>
        </div>
        <div className={styles.container__item}>
          <div className={styles.container__item__text}>{t('text2')}</div>
          <Image src='/images/Banner3/icon2.png' alt='icon2' width={84} height={84} />
        </div>
        <div className={styles.container__item}>
          <Image src='/images/Banner3/icon3.png' alt='icon3' width={84} height={84} />
          <div className={styles.container__item__text}>{t('text3')}</div>
        </div>
        <div className={styles.container__item}>
          <div className={styles.container__item__text}>{t('text4')}</div>
          <Image src='/images/Banner3/icon4.png' alt='icon4' width={84} height={84} />
        </div>
      </div>
      <div className={styles.button}>
        <Button text={t('button')} link='' />
      </div>
    </div>
  );
}
export default Banner3;
