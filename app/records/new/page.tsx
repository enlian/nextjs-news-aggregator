"use client";

import { useState } from "react";

export default function NewRecord() {
  const [form, setForm] = useState({
    amount: "",
    type: "支出",
    tag: "",
    date: "",
    note: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    if (data.success) {
      alert("记录添加成功！");
    } else {
      alert("添加失败，请重试！");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>添加收支记录</h1>
      <label>
        金额：
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        类型：
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="收入">收入</option>
          <option value="支出">支出</option>
        </select>
      </label>
      <label>
        标签：
        <input
          type="text"
          name="tag"
          value={form.tag}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        日期：
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        备注：
        <input
          type="text"
          name="note"
          value={form.note}
          onChange={handleChange}
        />
      </label>
      <button type="submit">添加</button>
    </form>
  );
}
