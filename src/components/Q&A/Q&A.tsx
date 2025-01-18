'use client';

import React, { useState, useRef } from "react";
import styles from "./Q&A.module.scss";

const QandA: React.FC = () => {
    const [activeBlock, setActiveBlock] = useState<number | null>(null);
    const [isButtonLocked, setIsButtonLocked] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const truncateText = (text: string, isActive: boolean, shouldTruncate: boolean) => {
        if (!isActive && shouldTruncate) {
            const orderIndex = text.indexOf('order ');
            if (orderIndex !== -1) {
                return text.substring(0, orderIndex + 5) + '...';
            }
        }
        return text;
    };

    const handleMouseLeave = () => {
        // Очистка предыдущего таймера
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        
        // Установка нового таймера для сброса состояния
        timeoutRef.current = setTimeout(() => {
            setActiveBlock(null);
            setIsButtonLocked(false);
        }, 50);
    };

    const handleMouseEnter = () => {
        // Очистка таймера при возврате курсора в блок
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

    const questions = [
        {
            question: "What is your return policy?",
            explanation: "We offer a 30-day money-back. If you're not satisfied with your purchase, you can return it within 30 days for a full refund within 30 days for a full refund",
            truncate: false
        },
        {
            question: "Can I cancel or change my order?",
            explanation: "Please contact us as soon as possible if you need to cancel or make changes to your order. We will do our best to accommodate your request, but please note that we may not be able to make changes once an order has shipped.",
            truncate: true
        },
        {
            question: "How do I track my order?",
            explanation: "Once your order has been shipped, you will receive a confirmation email with tracking details. You can use this information to track your order's delivery status.",
            truncate: false
        }
    ];

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Q&A</h1>
            <div className={styles.container}>
                {questions.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.block} ${activeBlock === index ? styles.active : ''}`}
                    >
                        <div className={styles.text}>
                            <div className={`${styles.question} ${activeBlock === index ? styles.questionActive : ''}`}>
                                {item.question}
                            </div>
                            <div className={`${styles.explanation} ${activeBlock === index ? styles.explanationActive : ''}`}>
                                {truncateText(item.explanation, activeBlock === index, item.truncate)}
                            </div>
                            <button
                                className={`${styles.button} ${activeBlock === index ? styles.rotated : ''}`}
                                onClick={(e) => handleClick(e, index)}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default QandA;
