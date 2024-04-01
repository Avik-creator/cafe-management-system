import UserHeader from "@/components/layout/user-header";

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
      <div className="flex overflow-hidden">
        <main className="w-full h-full">
          <UserHeader />
          {children}
        </main>
      </div>
    </>
  );
}
