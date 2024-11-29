import styles from "./MonthPicker.module.css";
import { FaCaretDown } from "react-icons/fa";

interface props {
  onClick: () => void;
  currentYear: number;
  currentMonth: number;
}
const MonthPicker = ({ onClick, currentYear, currentMonth }: props) => {
  return (
    <div className={styles.box}>
      <div className={styles.time} onClick={onClick}>
        <span>{currentYear}年{currentMonth}月</span>
        <FaCaretDown size={16}/>
      </div>
      <div className={styles.money}>总支出￥500</div>
      <div className={styles.money}>总收入￥50</div>
    </div>
  );
};

export default MonthPicker;
