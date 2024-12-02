import styles from "./AddRecord.module.css";
import { IoMdClose } from "react-icons/io";
import React, { useEffect, useRef, useState } from "react";
import moment from "moment";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onRecordSubmit: () => void;
}

const AddRecord = ({ isOpen, onClose, onRecordSubmit }: Props) => {
  useEffect(() => {}, [isOpen]);

  if (isOpen) {
    return (
      <div className={styles.modalOverlay} onClick={onClose}>
        <div
          className={styles.modalContent}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <IoMdClose size={30} onClick={onClose} className={styles.close} />
        </div>
      </div>
    );
  }
};

export default AddRecord;
