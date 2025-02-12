import Link from 'next/link';
import { cn } from '@/functions/cn';
import { GetSocialData } from '@/constants/GetSocialsData';
import styles from './newsPopup.module.scss';

interface NewsCardPopupProps {
  news: {
    text: string;
    caption: string;
  };
  onClose: () => void;
}

const NewsCardPopup: React.FC<NewsCardPopupProps> = ({ news, onClose }) => {
  const socials = GetSocialData();
  return (
    <div className={styles.popup}>
      <div className={styles.popup__content}>
        <button className={styles.popup__close} onClick={onClose}></button>
        <div className={styles.popup__badges}>
          <div className={styles.popup__badge}>SPACE</div>
          <div className={styles.popup__badge}>SPACE</div>
          <div className={styles.popup__badge}>SPACE</div>
        </div>
        <p className={styles.popup__caption}>{news.caption}</p>
        <div className={styles.popup__image}></div>
        <p className={styles.popup__text}>{news.text}</p>
        <div className={styles.popup__bottom}>
          <a className={styles.popup__link} href='#'>
            READ MORE
          </a>
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
  );
};

export default NewsCardPopup;
