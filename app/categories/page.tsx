"use client";

import { useState, useEffect } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/categories");
      const data = await response.json();
      if (data.success) setCategories(data.data);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>分类管理</h1>
      <ul>
        {categories.map((cat: { id: number; name: string; type: string }) => (
          <li key={cat.id}>
            {cat.name} ({cat.type})
          </li>
        ))}
      </ul>
    </div>
  );
}
