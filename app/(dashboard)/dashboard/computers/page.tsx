import BreadCrumb from "@/components/breadcrumb";
import { columns } from "@/components/tables/employee-tables/columns";
import { buttonVariants } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { getComputerList } from "@/server/DashboardList/getComputers";
import { Plus } from "lucide-react";
import Link from "next/link";

const breadcrumbItems = [{ title: "Computer", link: "/dashboard/computers" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;

  const computerList = getComputerList();

  const [computers] = await Promise.all([computerList]);

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-1">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Computers (${computers.length})`}
            description="Manage Computers"
          />

          <Link
            href={"/dashboard/computers/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />

        <DataTable searchValue="model_no" columns={columns} data={computers} />
      </div>
    </>
  );
}
