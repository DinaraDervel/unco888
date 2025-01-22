'use client';

import React, { useState, useRef } from "react";
import styles from "./Q&A.module.scss";

const QandA: React.FC = () => {
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
            question: "What is your return policy?",
            explanation: "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, you can return it within 30 days for a full refund within 30 days for a full refund",
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
                            <div className={styles.textsmini}>
                                <div className={`${styles.question} ${activeBlock === index ? styles.questionActive : ''}`}>
                                    {item.question}
                                </div>
                                <div className={`${styles.explanation} ${activeBlock === index ? styles.explanationActive : ''}`}>
                                    {item.explanation}
                                </div>
                            </div>
                        </div>
                        {/* <div className={styles.forbutton}> */}
                            <button
                                    className={`${styles.button} ${activeBlock === index ? styles.rotated : ''}`}
                                    onClick={(e) => handleClick(e, index)}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />
                        {/* </div> */}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default QandA;
