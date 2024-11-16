import { redirect } from "next/navigation";

export default function HomePage() {
  // 重定向到第一个 Tab 页面
  redirect("/tabs/tab1");
}
