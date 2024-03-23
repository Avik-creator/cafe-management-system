import Link from "next/link";
import { Progress } from "./ui/progress";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebaritem";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/dashboard/alldetails">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            CCMS
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Dashboard" href="/dashboard/alldetails" />
        <SidebarItem label="Computer" href="/dashboard/computer" />
        <SidebarItem label="Report" href="/dashboard/reports" />
        <SidebarItem label="User" href="/dashboard/users" />
      </div>
    </div>
  );
};
