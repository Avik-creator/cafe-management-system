import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
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
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-2 md:pt-16 h-screen">
          <ScrollArea>
          {children}
          </ScrollArea>
          </main>
      </div>
    </>
  );
}
