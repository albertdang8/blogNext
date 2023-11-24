import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "nextBlog",
  description: "Post how you want",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text container bg-primaryLight">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
