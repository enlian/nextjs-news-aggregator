"use client";
import React, { useState } from "react";
import { Virtuoso } from "react-virtuoso";
import DetailItem from "./DetailItem";
import MonthPicker from "./MonthPicker";
import MonthModal from "./MonthModal";
import styles from "./page.module.css";
import moment from "moment";
import { FaRegEdit } from "react-icons/fa";

export default function name() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentYear, setYear] = useState(moment().year());
  const [currentMonth, setMonth] = useState(moment().month() + 1);

  const items = [1, 2, 3, 4, 5, 6, 4, 8];

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const onTimeChange = (year: number, month: number) => {
    setYear(year);
    setMonth(month);
  };

  return (
    <div className={styles.detailPage}>
      <MonthPicker
        onClick={openModal}
        currentYear={currentYear}
        currentMonth={currentMonth}
      />
      <Virtuoso
        totalCount={items.length}
        itemContent={(index) => <DetailItem />}
        style={{ height: "100%", width: "100%" }}
      />
      <MonthModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onTimeChange={onTimeChange}
      />

      <div className={styles.add}>
        <FaRegEdit size={20}/>

        <span>记一笔</span>
      </div>
    </div>
  );
}
