"use client";
import React, { ReactElement, useState, useEffect, useCallback } from 'react';
import Modal from "react-modal";
import styles from "./ModalComponent.module.scss";
interface ChildrenProps {
    onClose?: () => void;
}

Modal.setAppElement("body");

type ModalComponentProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    children: ReactElement<ChildrenProps>;
};

const ModalComponent: React.FC<ModalComponentProps> = ({
    isOpen,
    onRequestClose,
    children,
}) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onRequestClose();
        }, 600);
    }, [onRequestClose, setIsClosing]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, handleClose]);

    const overlayClassName = `${styles.overlay} ${isClosing ? styles.closing : ''}`;
    const contentClassName = `${styles.content} ${isClosing ? styles.closing : ''}`;

    const childrenWithProps = React.cloneElement(children, { onClose: handleClose });

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            overlayClassName={overlayClassName}
            className={contentClassName}
            shouldCloseOnEsc={false}
            preventScroll={true}
        >
            <div className={styles.modalContent}>
                {childrenWithProps}
            </div>
        </Modal>
    );
};

export default ModalComponent;
