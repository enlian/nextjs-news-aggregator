import styles from "./MonthPicker.module.css";
interface props {
  onClick: () => void;
}
const MonthPicker = ({ onClick }: props) => {
  return (
    <div className={styles.box}>
      <div onClick={onClick}>2024.11</div>
      <div>总支出￥500 总收入￥50</div>
    </div>
  );
};

export default MonthPicker;
