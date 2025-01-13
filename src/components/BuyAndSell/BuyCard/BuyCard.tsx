'use client';

import { useTranslations } from 'next-intl';
import Button from '@/components/Button/Button';
import styles from './buyCard.module.scss';
import Image from 'next/image';

interface BuyCardProps {
  quantity: string;
  price: string;
}

function BuyCard({ quantity, price }: BuyCardProps) {
  const t = useTranslations('buyandsell');

  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        <div className={styles.card__image}>
          <Image src='/images/BuyAndSell/logo.png' alt='logo' width={260} height={260} />
        </div>
        <h3 className={styles.card__title}>
          UNCO<span>888</span>
        </h3>
      </div>
      <div className={styles.card__bottom}>
        <div className={styles.card__text}>
          <div>{t('card.quantity')}:</div>
          <div>{`${quantity}`}</div>
        </div>
        <div className={styles.card__price}>
          <div className={styles.card__text}>
            <div>{t('card.price')}:</div>
            <div className={styles.card__numbers}>
              {`${price}`}
              <span> usdt</span>
            </div>
          </div>
          <div className={styles.button}>
            <Button text={t('card.button')} link='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyCard;
