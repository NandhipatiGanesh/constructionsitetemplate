import type { Metadata } from "next";
import { Lexend, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import ColorflowFooter from "./components/footer";

// Lexend for Headings
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend",
});

// Be Vietnam Pro for Body
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bevietnam",
});

export const metadata: Metadata = {
  title: "SLBuilders in Hyderabad",
  description:
    "SLBuilders is a leading construction company in Hyderabad, delivering high-quality infrastructure, residential, and commercial projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${beVietnamPro.variable}`}
    >
      <body className="antialiased font-body">
        {children}
        <ColorflowFooter />
      </body>
    </html>
  );
}
