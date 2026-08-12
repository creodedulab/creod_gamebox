import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CREOD Gamebox",
  description: "학생들이 만든 HTML 게임을 모아 실행하는 게임 아카이브",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
