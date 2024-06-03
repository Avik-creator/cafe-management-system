import { ReportForm } from "@/components/forms/Admin Forms/report-form";
import { getReportById } from "@/server/DashboardList/reports";

import React from "react";

export default async function Page({
  params,
}: {
  params: { reportId: string };
}) {
  // const report = await getReport(reportId);
  const { reportId } = params;
  const reports = await getReportById(reportId);

  return (
    <div className="flex-1 space-y-4 p-8">
      <ReportForm
        initialData={{
          report_id: reports?.report_id,
          title: reports?.title,
          description: reports?.description,
          user: reports?.user,
          status: reports?.status,
          report_date: reports?.report_date,
        }}
        key={null}
      />
    </div>
  );
}
