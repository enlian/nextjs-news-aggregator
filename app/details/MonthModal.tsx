import styles from "./MonthModal.module.css";
import { IoMdClose } from "react-icons/io";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MonthModal = ({ isOpen, onClose }: ModalProps) => {
  if (isOpen) {
    return (
      <div className={styles.modalOverlay} onClick={onClose}>
        <div className={styles.modalContent}>
          <IoMdClose size={30} onClick={onClose} />
        </div>
      </div>
    );
  }
};

export default MonthModal;
