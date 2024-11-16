"use client";

import { useState, useEffect } from "react";

export default function Tags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch("/api/tags");
      const data = await response.json();
      if (data.success) setTags(data.data);
    };

    fetchTags();
  }, []);

  return (
    <div>
      <h1>标签管理</h1>
      <ul>
        {tags.map((tag: { id: number; name: string; type: string }) => (
          <li key={tag.id}>
            {tag.name} ({tag.type})
          </li>
        ))}
      </ul>
    </div>
  );
}
