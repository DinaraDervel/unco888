import { useTranslations } from 'next-intl';
import Button from '../Button/Button';
import styles from './c-level.module.scss';
import Button2 from '../Button2/Button2';

function CLevel() {
  const t = useTranslations('c-level');
  return (
    <section className={styles.container} id='clevel'>
      <h2 className={styles.title}>{t('title')}</h2>
      <hr className={styles.line}></hr>
      <h3 className={styles.subtitle}>{t('subtitle')}</h3>
      <div className={styles.cards}>
        <div className={styles.card_left}>
          <p className={styles.card_text}>{t('cards.card_1')}</p>
        </div>
        <div className={styles.flare2}></div>
        <div className={styles.card_right}>
          <div className={styles.card}>
            <p className={styles.card_text}>{t('cards.card_2')}</p>
          </div>
          <div className={styles.card}>
            <p className={styles.card_text}>{t('cards.card_3')}</p>
          </div>
          <div className={styles.card}>
            <p className={styles.card_text}>{t('cards.card_4')}</p>
          </div>
          <div className={styles.card}>
            <p className={styles.card_text}>{t('cards.card_5')}</p>
          </div>
        </div>
      </div>
      <span className={styles.star}>
      <div className={styles.flare}></div>
</span>
      <div className={styles.buttons}>
        <Button link='#buy' text={t('buttons.button_1')} />
        <Button2 link='/files/UNCO_digital_transformation_for_food_retail.pdf' text={t('buttons.button_2')}/>
      </div>
    </section>
  );
}
export default CLevel;
