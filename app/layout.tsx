import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coach Nick | Holistic SAT/ACT Test Prep | Princeton Educated",
  description: "White-glove SAT and ACT test preparation by a Princeton-educated tutor. Limited clientele, personalized strategies, and proven results for top university admissions.",
  keywords: ["SAT prep", "ACT prep", "test preparation", "Princeton tutor", "college admissions", "holistic tutoring", "SAT tutor", "ACT tutor"],
  authors: [{ name: "Coach Nick" }],
  openGraph: {
    title: "Coach Nick | Holistic SAT/ACT Test Prep",
    description: "White-glove SAT and ACT test preparation by a Princeton-educated tutor",
    url: "https://coachnick.org",
    siteName: "Coach Nick",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
