'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useTranslations } from 'next-intl';
import ModalComponent from '@/components/ModalСomponent/ModalСomponent';
import Button3 from '@/components/Button3/Button3';
import styles from '@/components/FeedbackForm/FeedbackForm.module.scss';

type FeedbackFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FeedbackForm: React.FC<FeedbackFormProps> = ({ isOpen, onClose }) => {
  const t = useTranslations('feedbackForm');

  const [name, setName] = useState<string>('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    message: false,
  });

  const closeModal = () => {
    setName('');
    setPhoto(null);
    setMessage('');
    setIsAgreed(false);
    setTouchedFields({
      name: false,
      message: false,
    });
    onClose();
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setPhoto(file);
  };

  const handleAgreementChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(event.target.checked);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const submitData = new FormData();
      submitData.append('name', name);
      submitData.append('message', message);
      if (photo) {
        submitData.append('photo', photo);
      }

      const response = await fetch('/api/submit', {
        method: 'POST',
        body: submitData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);

      setName('');
      setMessage('');
      setPhoto(null);

    } catch (error) {
      console.error('Error:', error);
    }
    closeModal();
  };

  const handleBlur = (fieldName: 'name' | 'message') => {
    setTouchedFields((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  const handleCancel = () => {
    setPhoto(null);
  }

  const isFormValid = name.trim() !== '' && message.trim() !== '' && isAgreed;

  return (
    <ModalComponent isOpen={isOpen} onRequestClose={closeModal}>
      <form className={styles.feedback_form}>
        <div className={styles.container_feedback_form}>
          <button type='button' className={styles.close} onClick={closeModal} />
          <div>
            <div>
              <label className={styles.label} htmlFor='name'>
                {t('labelName')}
              </label>
              <input
                className={`${styles.input} ${touchedFields.name && name.trim() === '' ? styles.error : ''}`}
                type='text'
                id='name'
                value={name}
                placeholder={t('placeholderName')}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => handleBlur('name')}
                maxLength={50}
                required
              />
            </div>
            <div className={`${styles.input} ${styles.photo}`}>
              <label className={styles.photo_label} htmlFor='photo'>
                <div className={styles.photo_icon}>
                  <img src='/images/Feedback/add-a-photo-outline.svg' alt='' />
                </div>
                {photo ? <></> :  <p className={styles.photo_text}>{t('labelPhoto')}</p> }
              </label>
              <input
                className={styles.hidden}
                type='file'
                id='photo'
                accept='image/*'
                onChange={handlePhotoChange}
              />
              {photo && (
                <div className={styles.photo_details}>
                  <div className={styles.photo_name_container}>
                    <p className={styles.photo_text}>{photo.name}</p>
                  </div>
                  <button type="button" className={styles.cancel} onClick={handleCancel} />
                </div>
              )}
            </div>
          </div>
          <div>
            <label className={styles.label} htmlFor='message'>
              {t('labelMessage')}
            </label>
            <textarea
              className={`${styles.input} ${styles.message} ${touchedFields.message && message.trim() === '' ? styles.error : ''}`}
              placeholder={t('placeholderMessage')}
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => handleBlur('message')}
              maxLength={312}
              required
            />
          </div>
        </div>
        <footer className={styles.footer}>
          <label className={styles.container_agree} htmlFor='agree'>
            <input
              id='agree'
              className={styles.checkbox_agree}
              checked={isAgreed}
              onChange={handleAgreementChange}
              type='checkbox'
              required
            />
            <span className={styles.text_agree}>{t('agreeText')}</span>
          </label>
          <Button3
            className={`${styles.button} ${styles.submit}`}
            type='submit'
            onClick={handleSubmit}
            disabled={!isFormValid}
            text={t('btnText')}
          />
        </footer>
      </form>
    </ModalComponent>
  );
};

export default FeedbackForm;
