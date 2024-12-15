import styles from "./AddRecord.module.css";
import { IoMdClose } from "react-icons/io";
import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import { MdAttachMoney, MdFastfood, MdNightlife } from "react-icons/md";
import { FaCaretDown, FaCar, FaShoppingCart } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import Moment from "moment";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onRecordSubmit: () => void;
}

interface Months {
  year: number;
  month: number;
  days: number[];
}

//获取过去两年内的每年每月和每日
function getDays() {
  const nowYear = moment().year();
  const arrs: Months[] = [];

  for (let year = nowYear - 2; year <= nowYear; year++) {
    for (let month = 0; month < 12; month++) {
      const dayInMonth = moment({ year, month }).daysInMonth();
      const monthData: Months = {
        year: year,
        month: month + 1,
        days: [],
      };
      for (let day = 1; day <= dayInMonth; day++) {
        monthData.days.push(day);
      }
      arrs.push(monthData);
    }
  }
  console.log(arrs);

  return arrs;
}

const AddRecord = ({ isOpen, onClose, onRecordSubmit }: Props) => {
  const [daysArray, setDaysArray] = useState<Months[]>([]);
  const [isDateModalOpen, setDateModalOpen] = useState(true);

  useEffect(() => {
    setDaysArray(getDays());
  }, []);

  if (isOpen) {
    if (isDateModalOpen) {
      return (
        <div>
          {daysArray.map((i) => (
            <div key={moment().date()}>
              <p>{i.year}</p>
            </div>
          ))}
        </div>
      );
    }

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
            <div className={styles.typeBoxL}>
              <div className={`${styles.type} ${styles.selected}`}>支出</div>
              <div className={styles.type}>收入</div>
            </div>

            <div className={styles.date}>
              <span>11月20日</span>
              <FaCaretDown size={16} color="#999" />
            </div>
          </div>
          <div className={styles.moneyInputGroup}>
            <MdAttachMoney size={30} />
            <input type="number" className={styles.moneyInput} />
          </div>
          <div className={styles.tags}>
            <div>
              <div>
                <MdFastfood size={30} />
              </div>
              <span>餐饮</span>
            </div>
            <div>
              <div>
                <FaCar size={30} />
              </div>
              <span>交通</span>
            </div>
            <div>
              <div>
                <GiClothes size={30} />
              </div>
              <span>服饰</span>
            </div>
            <div>
              <div>
                <FaShoppingCart size={30} />
              </div>
              <span>购物</span>
            </div>
            <div>
              <div>
                <MdNightlife size={30} />
              </div>
              <span>生活</span>
            </div>
            <div>
              <div>
                <IoMdSchool size={30} />
              </div>
              <span>教育</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AddRecord;
