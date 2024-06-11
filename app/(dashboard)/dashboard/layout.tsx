import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyber Cafe Management System",
  description: "Cyber Cafe Management System",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex overflow-hidden">
        <Sidebar />
        <main className="w-full pt-2 md:pt-14">{children}</main>
      </div>
    </>
  );
}
