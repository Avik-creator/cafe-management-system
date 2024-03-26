import { ComputerForm } from "@/components/forms/computer-form";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 space-y-4 p-8">
      <ComputerForm
        categories={[]}
        initialData={{
          id: "1",
          model_no: "1",
          isOccupied: "true",
          cafe: 1,
        }}
        key={null}
      />
    </div>
  );
}
