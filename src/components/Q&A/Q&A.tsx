'use client';

import React, { useState, useRef } from 'react';
import styles from './Q&A.module.scss';
import QandAData from '../../constants/getQ&AData';
import { useTranslations } from 'next-intl';

const QandA: React.FC = () => {
    const t = useTranslations('faq');

    const [activeBlock, setActiveBlock] = useState<number | null>(null);
    const [isButtonLocked, setIsButtonLocked] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setActiveBlock(null);
            setIsButtonLocked(false);
        }, 30);
    };

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const handleClick = (e: React.MouseEvent, index: number) => {
        e.preventDefault();

        if (isButtonLocked) {
            return;
        }

        setActiveBlock(index);
        setIsButtonLocked(true);
    };

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>{t('title')}</h1>
            <div className={styles.container}>
                {QandAData.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.block} ${activeBlock === index ? styles.active : ''}`}
                    >
                        <div className={styles.text}>
                            <div className={styles.textsmini}>
                                <p
                                    className={`${styles.question} ${activeBlock === index ? styles.questionActive : ''}`}
                                >
                                    {t(item.question)}
                                </p>
                                <p
                                    className={`${styles.explanation} ${activeBlock === index ? styles.explanationActive : ''}`}
                                >
                                    {t(item.explanation)}
                                </p>
                            </div>
                        </div>
                        <button
                            className={`${styles.button} ${activeBlock === index ? styles.rotated : ''}`}
                            onClick={(e) => handleClick(e, index)}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
};

export default QandA;
