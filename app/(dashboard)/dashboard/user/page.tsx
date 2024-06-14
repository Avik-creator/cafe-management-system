import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/user-tables/client";

import { getUsersList } from "@/server/DashboardList/users";

const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];

export default async function page() {
  const userLists = getUsersList();

  const [usersLists] = await Promise.all([userLists]);
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={usersLists ?? []} />
      </div>
    </>
  );
}
