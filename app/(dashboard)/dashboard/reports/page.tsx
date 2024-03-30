import BreadCrumb from "@/components/breadcrumb";
import { columns } from "@/components/tables/report-table/columns";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { Reports as reports } from "@/constants/data";

const breadcrumbItems = [{ title: "Report", link: "/dashboard/reports" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;

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

        <DataTable searchValue="model_no" columns={columns} data={reports} />
      </div>
    </>
  );
}
