import { UserForm } from "@/components/forms/Admin Forms/user-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function Page() {
  return (
    <ScrollArea className="relative h-screen">
      <div className="flex-1 space-y-4 p-8">
        <UserForm categories={[]} initialData={{}} />
      </div>
    </ScrollArea>
  );
}
