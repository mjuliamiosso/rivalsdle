import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rivalsdle",
  description:
    "Daily guessing game where you identify characters using quotes, skills, emojis and more. Play every day and test your knowledge!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
