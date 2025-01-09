"use client";
import React, { ReactElement } from "react";
import Modal from "react-modal";
import styles from "./ModalComponent.module.scss";

Modal.setAppElement("body");

type ModalComponentProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    children: ReactElement;
};

const ModalComponent: React.FC<ModalComponentProps> = ({
    isOpen,
    onRequestClose,
    children,
}) => {

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            onRequestClose();
        }
    };

    React.useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        // <Modal
        //     isOpen={isOpen}
        //     onRequestClose={onRequestClose}
        //     overlayClassName={styles.overlay}
        //     className={isOpen ? `${styles.content} ${styles.contentOpen}` : styles.content}
        // >
        //     <div className={styles.modalContent}>
        //         {children}
        //     </div>
        // </Modal>

       <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={styles.overlay}
            className={styles.content}
        >
            <div className={styles.modalContent}>
                {children}
            </div>
        </Modal>
    );
};

export default ModalComponent;
