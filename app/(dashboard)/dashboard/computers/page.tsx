import BreadCrumb from "@/components/breadcrumb";
import { columns } from "@/components/tables/employee-tables/columns";
import { ComputerTable } from "@/components/tables/employee-tables/computer-table";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Computers } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

const breadcrumbItems = [{ title: "Employee", link: "/dashboard/employee" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const Computers: Computers[] = [
    {
      model_no: "1",
      isOccupied: "true",
      cafe: 1,
    },
    {
      model_no: "2",
      isOccupied: "true",
      cafe: 1,
    },
    {
      model_no: "2",
      isOccupied: "true",
      cafe: 1,
    },
    {
      model_no: "2",
      isOccupied: "true",
      cafe: 1,
    },
    {
      model_no: "2",
      isOccupied: "true",
      cafe: 1,
    },
    {
      model_no: "2",
      isOccupied: "true",
      cafe: 1,
    },
  ];

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Employee (${Computers.length})`}
            description="Manage Computers"
          />

          <Link
            href={"/dashboard/employee/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />

        <ComputerTable
          searchKey="model_no"
          pageNo={page}
          columns={columns}
          totalUsers={Computers.length}
          data={Computers}
          pageCount={1}
        />
      </div>
    </>
  );
}
