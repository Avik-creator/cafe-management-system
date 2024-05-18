import { ComputerForm } from "@/components/forms/Admin Forms/computer-form";
import { ScrollArea } from "@/components/ui/scroll-area";

import React from "react";

export default function Page() {
  return (
    <ScrollArea className="relative h-screen">
      <div className="flex-1 space-y-4 p-8">
        <ComputerForm categories={[]} initialData={{}} key={null} />
      </div>
    </ScrollArea>
  );
}
