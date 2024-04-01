import { UserForm } from "@/components/forms/Admin Forms/user-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-5">
        <UserForm
          categories={[]}
          initialData={{
            address: "123, 4th Street",
            name: "John Doe",
            email: "john@g.com",
            phone: "1234567890",
          }}
          key={null}
        />
      </div>
    </ScrollArea>
  );
}
