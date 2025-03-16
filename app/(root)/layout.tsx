import React from "react";
import Header from "../../components/Header";
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="relative">
      <Header />
      {children}
    </section>
  );
}
