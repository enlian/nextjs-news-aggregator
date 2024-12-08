"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./components/Header";
import "./globals.css";
import { BiSolidDetail } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (tab: string) =>
    pathname === `/${tab}` || (pathname === "/" && tab === "tab1");

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          {children}
          <div className="bottom-tabs">
            <Link
              href="/details"
              className={`tab-item ${
                isActive("details") ? "tab-item-active" : ""
              }`}
            >
              <BiSolidDetail size={25} />
              <span>明细</span>
            </Link>
            <Link
              href="/statistics"
              className={`tab-item ${
                isActive("statistics") ? "tab-item-active" : ""
              }`}
            >
              <FaChartPie size={23} />

              <span>统计</span>
            </Link>
            <Link
              href="/settings"
              className={`tab-item ${
                isActive("settings") ? "tab-item-active" : ""
              }`}
            >
              <IoSettingsSharp size={25} />

              <span>设置</span>
            </Link>
          </div>
        </Provider>
      </body>
    </html>
  );
}
