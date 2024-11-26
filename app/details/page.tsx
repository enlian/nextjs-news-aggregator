"use client";
import React, { useState } from "react";
import { Virtuoso } from "react-virtuoso";
import DetailItem from "./DetailItem";
import MonthPicker from "./MonthPicker";
import MonthModal from "./MonthModal";
import styles from "./page.module.css";

export default function name() {
  const [isModalOpen, setModalOpen] = useState(false);
  const items = [1, 2, 3, 4, 5, 6, 4, 8];

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className={styles.detailPage}>
      <MonthPicker onClick={openModal}/>
      <Virtuoso
        totalCount={items.length}
        itemContent={(index) => <DetailItem />}
        style={{ height: "100%", width: "100%" }}
      />
      <MonthModal isOpen={isModalOpen} onClose={closeModal}/>
    </div>
  );
}
