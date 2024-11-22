'use client';
import { Virtuoso } from 'react-virtuoso';
import DetailItem from "./DetailItem";

export default function name() {
  const items = [1, 2, 3, 4, 5, 6, 4, 8];
  const list = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

  return (
    <Virtuoso
      totalCount={items.length}
      itemContent={(index) => <div style={{ padding: 10 }}>Row {items[index]}</div>}
      style={{ height: '400px', width: '300px' }}
    />
  );
}
