import { notFound } from "next/navigation";

const tabContents: Record<string, { title: string; content: string }> = {
  tab1: { title: "Tab 1", content: "这是 Tab 1 的内容。" },
  tab2: { title: "Tab 2", content: "这是 Tab 2 的内容。" },
  tab3: { title: "Tab 3", content: "这是 Tab 3 的内容。" },
};

export default function TabPage({ params }: { params: { tab: string } }) {
  const tabData = tabContents[params.tab];

  if (!tabData) {
    notFound();
  }

  return (
    <div>
      <h2>{tabData.title}</h2>
      <p>{tabData.content}</p>
    </div>
  );
}
