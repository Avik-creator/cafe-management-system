"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
}

export function UserMobileSidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Signing
              </h2>
              <div className="space-y-1">
                <Link href={"/user/signin"}>
                  <p className="block px-4 py-2 text-sm font-medium text-white hover:text-blue-900">
                    Sign In
                  </p>
                </Link>

                <Link href={"/user/signup"}>
                  <p className="block px-4 py-2 text-sm font-medium text-white hover:text-blue-900">
                    Sign Up
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
