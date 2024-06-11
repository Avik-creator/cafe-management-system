import { getComputerList } from "@/server/DashboardList/computers";
import { getReportList } from "@/server/DashboardList/reports";
import { getUsersList } from "@/server/DashboardList/users";
import { Chart } from "./chart";

export const DataCharts = async () => {
  const getUsers = await getUsersList();
  const getComputers = await getComputerList();
  const getReports = await getReportList();

  const [usersList, computersList, reportsList] = await Promise.all([
    getUsers,
    getComputers,
    getReports,
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 w-full">
      <div className="col-span-1 lg:col-span-3 xl:col-span-4 w-full">
        <Chart
          users={usersList ?? []}
          computers={computersList ?? []}
          reports={reportsList ?? []}
        />
      </div>
    </div>
  );
};
