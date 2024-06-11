"use client";

import { Computers, User, Report } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaVarient } from "@/components/areaVarient";

type Props = {
  users: User[];
  computers: Computers[];
  reports: Report[];
};

export const Chart = ({ users, computers, reports }: Props) => {
  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
        <CardTitle className="text-xl line-clamp-1">Total Overview</CardTitle>
      </CardHeader>

      <CardContent className="h-full justify-between flex flex-1">
        {users.length === 0 || computers.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-muted-foreground text-sm">No Data Found</p>
          </div>
        ) : (
          <div className="flex flex-1 justify-between gap-40">
            <AreaVarient
              users={users}
              computers={computers}
              reports={reports}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};
