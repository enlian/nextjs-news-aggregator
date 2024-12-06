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

          <div className={styles.typeBox}>
            <div>支出</div>
            <div>收入</div>
            <div>11月20日</div>
          </div>
          <input type="number" className={styles.moneyInput} />
          <div className={styles.tags}>
            <div>餐饮</div>
            <div>交通</div>
            <div>服饰</div>
            <div>购物</div>
            <div>生活</div>
          </div>
        </div>
      </div>
    );
  }
};

export default AddRecord;
