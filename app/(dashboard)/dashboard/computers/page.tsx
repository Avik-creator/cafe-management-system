import BreadCrumb from "@/components/breadcrumb";
import { columns } from "@/components/tables/employee-tables/columns";
import { ComputerTable } from "@/components/tables/employee-tables/computer-table";
import { buttonVariants } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Computers } from "@/constants/data";
import { cn } from "@/lib/utils";
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

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Computers (${Computers.length})`}
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

        <DataTable searchValue="model_no" columns={columns} data={Computers}/>

        <ComputerTable
          searchKey="model_no"
          columns={columns}
          data={Computers}
          pageCount={1}
        />
      </div>
    </>
  );
}
