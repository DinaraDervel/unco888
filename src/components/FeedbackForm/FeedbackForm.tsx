"use client";
import {useTranslations} from "next-intl";
import styles from "@/components/ContactForm/contactForm.module.scss";
import React, {ChangeEvent, useState} from "react";

type FeedbackFormProps = {
    isOpen: boolean;
};

const FeedbackForm: React.FC<FeedbackFormProps> = ({isOpen}) => {
    const t = useTranslations('feedbackForm');

    const [name, setName] = useState<string>('');
    const [photo, setPhoto] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');
    const [isAgreed, setIsAgreed] = useState<boolean>(false);

    const closeModal = () => {
        setName('');
        setPhoto(null);
        setMessage('');
    };

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        setPhoto(file);
    };

    const handleAgreementChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsAgreed(event.target.checked);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log({name, photo, message});
        closeModal();
    };

    return (
            <form className={styles.main_container_contact_form}>
                <div className={styles.wrapper_contact_form}>
                    <button className={styles.close} onClick={closeModal} disabled={false}/>
                    <div>
                        <div>
                            <label htmlFor="name">{t("labelName")}</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                placeholder={t("placeholderName")}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="file"
                                id="photo"
                                accept="image/*"
                                placeholder={t("placeholderPhoto")}
                                onChange={handlePhotoChange}
                            />
                        </div>
                        <div className={styles.container_message}>
                            <label htmlFor="message">{t("labelMessage")}</label>
                            <textarea
                                placeholder={t('placeholderMessage')}
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <footer>
                        <div className={styles.container_agree}>
                            <input
                                id="agree"
                                className={styles.agree}
                                checked={isAgreed}
                                onChange={handleAgreementChange}
                                type="checkbox"
                                required
                            />
                            <label className={styles.text_label} htmlFor="agree">{t("agreeText")}</label>
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={!isAgreed}>
                            {t('btnText')}
                        </button>
                    </footer>
                </div>
            </form>
    )
}

export default FeedbackForm;