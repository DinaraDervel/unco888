'use client';

import React, { ChangeEvent, useState } from 'react';
import styles from './sellForm.module.scss';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Button3 from '@/components/Button3/Button3';

type SellFormProps = {
  onClose: () => void;
};

const SellForm: React.FC<SellFormProps> = ({ onClose }) => {
  const t = useTranslations('sellForm');
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [touchedFields, setTouchedFields] = useState({
    quantity: false,
    price: false,
    link: false,
    contact: false,
  });

  const handleCloseClick = () => {
    setQuantity('');
    setPrice('');
    setLink('');
    setContact('');
    setTouchedFields({
      quantity: false,
      price: false,
      link: false,
      contact: false,
    });
    onClose();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleCloseClick();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(event.target.checked);
  };

  const handleBlur = (fieldName: 'quantity' | 'price' | 'link' | 'contact') => {
    setTouchedFields((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  const isFormValid = quantity.trim() !== '' && price.trim() !== '' && link.trim() !== '' && contact.trim() !== '' && isAgreed;

  return (
    <form className={styles.container}>
      <button className={styles.close} onClick={handleCloseClick} />
      <div className={styles.container__wrapper}>
        <p className={styles.container__label}>{t('labelQuantity')}</p>
        <input
          placeholder={t('placeholderQuantity')}
          type='number'
          id='quantity'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          onBlur={() => handleBlur('quantity')}
          className={`${styles.container__input} ${touchedFields.quantity && quantity.trim() === '' ? styles.error : ''}`}
          required
        />
      </div>

      <div className={styles.container__wrapper}>
        <p className={styles.container__label}>
          {t('labelLink')}
          <Link href={'https://opensea.io/'} className={styles.link} target='_blank'>
            {' '}
            opensea.io
          </Link>
        </p>
        <input
          placeholder={t('placeholderLink')}
          type='url'
          id='link'
          value={link}
          onChange={(e) => setLink(e.target.value)}
          onBlur={() => handleBlur('link')}
          className={`${styles.container__input} ${touchedFields.link && link.trim() === '' ? styles.error : ''}`}
          required
        />
      </div>

      <div className={styles.container__wrapper}>
        <p className={styles.container__label}>{t('labelContactInfo')}</p>
        <input
          placeholder={t('placeholderContactInfo')}
          type='text'
          id='contact'
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          onBlur={() => handleBlur('contact')}
          className={`${styles.container__input} ${touchedFields.contact && contact.trim() === '' ? styles.error : ''}`}
          required
        />
      </div>
      <div className={styles.container__bottom}>
        <div className={styles.container_agree}>
          <input
            id='agree'
            className={styles.agree}
            checked={isAgreed}
            onChange={handleChange}
            type='checkbox'
            required
          />
          <label className={styles.text_label} htmlFor='agree'>
            {t('agreeText')}
          </label>
        </div>
        <div className={styles.buttonContainer}>
          <Button3
            className={`${styles.button} ${styles.submit}`}
            type='submit'
            onClick={handleSubmit}
            disabled={!isFormValid}
            text={t('btnText')}
          />
        </div>
      </div>
    </form>
  );
};

export default SellForm;
