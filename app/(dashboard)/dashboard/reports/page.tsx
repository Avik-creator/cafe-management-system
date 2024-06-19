import BreadCrumb from "@/components/breadcrumb";
import { columns } from "@/components/tables/report-table/columns";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { getReportList } from "@/server/DashboardList/reports";

const breadcrumbItems = [{ title: "Report", link: "/dashboard/reports" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export const revalidate = 600;

export default async function page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;

  const reports = await getReportList();

  const [reportList] = await Promise.all([reports]);

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-1">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Report (${reports.length})`}
            description="Manage Computers"
          />
        </div>
        <Separator />

        <DataTable
          searchValue="report_id"
          columns={columns}
          data={reportList}
        />
      </div>
    </>
  );
}
