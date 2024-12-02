"use client";
import React, { useState } from "react";
import { Virtuoso } from "react-virtuoso";
import DetailItem from "./DetailItem";
import MonthPicker from "./MonthPicker";
import MonthModal from "./MonthModal";
import styles from "./page.module.css";
import moment from "moment";
import { FaRegEdit } from "react-icons/fa";
import AddRecord from "./AddRecord/AddRecord";

export default function name() {
  const [isTimePickerModalOpen, setTimePickerModalOpen] = useState(false);
  const [isAddRecordModalOpen, setAddRecordModalOpen] = useState(false);
  const [currentYear, setYear] = useState(moment().year());
  const [currentMonth, setMonth] = useState(moment().month() + 1);

  const items = [1, 2, 3, 4, 5, 6, 4, 8];

  const openTimePickerModal = () => setTimePickerModalOpen(true);
  const closeTimePickerModal = () => setTimePickerModalOpen(false);
  const openAddRecordModal = () => setAddRecordModalOpen(true);
  const closeAddRecordModal = () => setAddRecordModalOpen(false);

  const onTimeChange = (year: number, month: number) => {
    setYear(year);
    setMonth(month);
  };

  const onRecordSubmit = ()=>{
    
  }

  return (
    <div className={styles.detailPage}>
      <MonthPicker
        onClick={openTimePickerModal}
        currentYear={currentYear}
        currentMonth={currentMonth}
      />
      <Virtuoso
        totalCount={items.length}
        itemContent={(index) => <DetailItem />}
        style={{ height: "100%", width: "100%" }}
      />
      <MonthModal
        isOpen={isTimePickerModalOpen}
        onClose={closeTimePickerModal}
        onTimeChange={onTimeChange}
      />

      <AddRecord isOpen={isAddRecordModalOpen} onClose={closeAddRecordModal} onRecordSubmit={onRecordSubmit}/>

      <div className={styles.add} onClick={openAddRecordModal}>
        <FaRegEdit size={20} />
        <span>记一笔</span>
      </div>
    </div>
  );
}
