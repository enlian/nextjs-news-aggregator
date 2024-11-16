"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (tab: string) => pathname === `/${tab}` || (pathname === "/" && tab === "tab1");

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <main style={{ flex: 1, padding: "20px" }}>{children}</main>
        <footer
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#f8f9fa",
            borderTop: "1px solid #ddd",
            padding: "10px 0",
          }}
        >
          <Link href="/details">
            <button style={{ backgroundColor: isActive("details") ? "#0070f3" : "transparent", border: "none" }}>
              Tab 1
            </button>
          </Link>
          <Link href="/statistics">
            <button style={{ backgroundColor: isActive("statistics") ? "#0070f3" : "transparent", border: "none" }}>
              Tab 2
            </button>
          </Link>
          <Link href="/settings">
            <button style={{ backgroundColor: isActive("settings") ? "#0070f3" : "transparent", border: "none" }}>
              Tab 3
            </button>
          </Link>
        </footer>
      </body>
    </html>
  );
}
