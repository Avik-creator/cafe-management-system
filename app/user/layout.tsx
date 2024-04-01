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
      <UserHeader />
      <div className="flex overflow-y-auto">
        <main className="w-full pt-2 md:pt-16 h-full">{children}</main>
      </div>
    </>
  );
}
