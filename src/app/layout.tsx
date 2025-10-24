import type { Metadata } from "next";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import { ContextProvider } from "@/context/ContextProvider";

export const metadata: Metadata = {
  title: "Weather App - Team Project",
  description: "A weather app application",
  keywords: [
    "nextjs",
    "react",
    "typescript",
    "tailwind css",
    "jest",
    "radu padurariu",
    "weather app",
    "maftei marius vasile",
  ],
  authors: [
    { name: "Radu Padurariu", url: "https://radupadurariu.netlify.app" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContextProvider>
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ContextProvider>
  );
}
