"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./components/Header";
import "./globals.css";

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
        <Header />
        <main>{children}</main>
        <footer className="bottom-tabs">
          <Link
            href="/details"
            className={`tab-item ${
              isActive("details") ? "tab-item-active" : ""
            }`}
          >
            <div>明细</div>
          </Link>
          <Link
            href="/statistics"
            className={`tab-item ${
              isActive("statistics") ? "tab-item-active" : ""
            }`}
          >
            <div>统计</div>
          </Link>
          <Link
            href="/settings"
            className={`tab-item ${
              isActive("settings") ? "tab-item-active" : ""
            }`}
          >
            <div>设计</div>
          </Link>
        </footer>
      </body>
    </html>
  );
}
