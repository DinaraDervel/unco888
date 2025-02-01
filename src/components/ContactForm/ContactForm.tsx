'use client';
// import { name } from "eslint-plugin-prettier/recommended";
import Button3 from '../Button3/Button3';
import styles from './contactForm.module.scss';
import { useTranslations } from 'next-intl';
import { ChangeEvent, useState } from 'react';

type ContactFormProps = {
  onClose: () => void;
  name?: string;
};

const ContactForm: React.FC<ContactFormProps> = ({ onClose, name }) => {
  const t = useTranslations('contactForm');
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [message, setMesage]= useState<string>('');

  const [touchedFields, setTouchedFields]=useState({
  name:false,
  mesage:false
});

  const handleCloseClick = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };
  const handleSubmit = (e:React.FormEvent) =>{
  e.preventDefault();
  console.log({name, message});
  onClose()
};

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(event.target.checked);
  };

  const handleBlur=(fieldName:"name" | "message") =>{
  setTouchedFields((prev) =>({
    ...prev,
    [fieldName]:true,
  }));
};

  const isFormValid= name !=="" && message.trim( ) !== "" && isAgreed;

  return (
    <form className={styles.main_container_contact_form}>
      <div className={styles.wrapper_contact_form}>
        <button className={styles.close} onClick={handleCloseClick} />
        <div className={styles.container_contact_form}>
          <div className={styles.container_name}>
            <p className={styles.container_text}>{t('labelName')}</p>
            <input
              placeholder={t('placeholderName')}
              type='text'
              className={`${styles.name} ${touchedFields.name && name === "" ? styles.error : ""}  `}
              defaultValue={name}
              onBlur={()=> handleBlur('name')}
              required
            />
          </div>

          <div className={styles.container_message}>
            <p className={styles.container_text}>{t('labelMessage')}</p>
            <textarea 
            onChange={(e) => setMesage(e.target.value)}
            onBlur={()=> handleBlur('message')}
            id="message"
            value={message}
            placeholder={t('placeholderMessage')} className={styles.message} />
          </div>
          <div className={styles.btn}>
            <Button3 
            className={`${styles.button} ${styles.submit}`}
            type="button"
            onClick={handleSubmit}
            disabled ={!isFormValid}
            text={t('btnText')}  />
          </div>

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
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
