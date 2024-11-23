import { RiMoneyCnyCircleFill } from "react-icons/ri";
import moment from 'moment';
import styles from'./DetailItem.module.css'

interface item {
  tag: string;
  time: number;
  type: string;
  money: number;
}

const DetailItem = () => {
  const items: item[] = [
    {
      tag: "购物",
      time: 1732356603,
      type: "收入",
      money: 150,
    },
    {
      tag: "购物",
      time: 1732355509,
      type: "收入",
      money: 40,
    },
    {
      tag: "购物",
      time: 1731563259,
      type: "支出",
      money: 120,
    },
    {
      tag: "购物",
      time: 1732352583,
      type: "支出",
      money: 30,
    },
  ];

  return (
    <div>
      <div className={styles.header}>
        <div>11月15日 昨天</div>
        <div>
          <i>出</i>100 <i>入</i>50
        </div>
      </div>

      {items.map((i) => (
        <div key={i.time} className="item">
          <RiMoneyCnyCircleFill/>
          <div>
            <div>
              <p>{i.tag}</p>
              <p>{moment.unix(i.time).format('HH:mm')}</p>
            </div>
            <div>
              {i.type === "支出" ? "-" : ""}
              {i.money}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailItem;
