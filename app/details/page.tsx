"use client";
import { Virtuoso } from "react-virtuoso";
import DetailItem from "./DetailItem";
import TimePicker from './TimePicker'
import styles from './page.module.css'

export default function name() {
  const items = [1, 2, 3, 4, 5, 6, 4, 8];
  const list = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

  return (
    <div className={styles.detailPage}>
      <TimePicker/>
      <Virtuoso
        totalCount={items.length}
        itemContent={(index) => <DetailItem />}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
