import { Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--pacifico",
});

export const metadata = {
  title: "Tandrima",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={pacifico.className}>{children}</body>
    </html>
  );
}
