import BreadCrumb from "@/components/breadcrumb";
import { columns } from "@/components/tables/session-table/columns";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { getSessionList } from "@/server/DashboardList/sessions";

const breadcrumbItems = [{ title: "Sessions", link: "/dashboard/sessions" }];
export const maxDuration = 40;
type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export const revalidate = 600;

export default async function page({ searchParams }: paramsProps) {
  const sessions = await getSessionList();

  const [sessionList] = await Promise.all([sessions]);

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-1">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Sessions (${sessions.length})`}
            description="Sessions"
          />
        </div>
        <Separator />

        <DataTable searchValue="id" columns={columns} data={sessionList} />
      </div>
    </>
  );
}
