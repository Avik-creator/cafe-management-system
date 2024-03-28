import { ReportForm } from "@/components/forms/report-form";

import React from "react";

export default function Page() {
  return (
    <div className="flex-1 space-y-4 p-8">
      <ReportForm
        initialData={{
          title:"Lorem Ipsum",
          description: "Lorem Ipsum",
          status: "PENDING",
          date_of_submit: "2022-01-01",
        }}
        key={null}
      />
    </div>
  );
}
