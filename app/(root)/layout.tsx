import React from "react";
import Header from "../../components/Header";
import Footer from "@/components/Footer";
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-88px)]">{children}</main>
      <Footer />
    </>
  );
}
