import styles from "./MonthModal.module.css";
import { IoMdClose } from "react-icons/io";
import React from "react";
import moment from "moment";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Month {
  name: number;
  isCurrent: boolean;
}

interface Year {
  name: number;
  months: Month[];
}

type YearList = Year[];

const MonthModal = ({ isOpen, onClose }: ModalProps) => {
  const currentYear = moment().year();
  const currentMonth = moment().month() + 1;
  const years: YearList = [];

  for (let i = 3; i >= 0; i--) {
    const year = currentYear - i;
    const months = Array.from({ length: 12 }, (index, j) => ({
      name: j + 1,
      isCurrent: j + 1 === currentMonth && year === currentYear,
    }));
    years.push({ name: year, months });
  }

  console.log(years);

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
          <div className={styles.modalBody}>
            {years.map((year) => (
              <div key={year.name}>
                <p>{year.name}年</p>
                <div className={styles.monthList}>
                  {year.months.map((month) => (
                    <div
                      className={
                        currentMonth === month.name && currentYear === year.name
                          ? styles.isCurrentMonth
                          : styles.month
                      }
                      key={month.name}
                    >
                      {month.name}月
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default MonthModal;
