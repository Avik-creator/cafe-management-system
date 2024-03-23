"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

type Props = {
  label: string;

  href: string;
};

export const SidebarItem = ({ label, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? "link" : "secondary"}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
