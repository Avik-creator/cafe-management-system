import { Computers, User, Report } from "@/types";
import {
  Tooltip,
  XAxis,
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

type Props = {
  users: User[];
  computers: Computers[];
  reports: Report[];
};

export const AreaVarient = ({ users, computers, reports }: Props) => {
  const maxRange = users.length + 5;
  const data = [
    {
      name: "Users",
      x: 0,
      userValue: users.length,
      computerValue: 0,
      reportValue: 0,
    },
    {
      name: "Computers",
      x: 1,
      userValue: 0,
      computerValue: computers.length,
      reportValue: 0,
    },
    {
      name: "Reports",
      x: 2,
      userValue: 0,
      computerValue: 0,
      reportValue: reports.length || 0,
    },
    {
      name: "MaxRange",
      x: maxRange,
      userValue: 0,
      computerValue: 0,
      reportValue: 0,
    },
  ];

  const radarData = [
    {
      category: "Users",
      value: users.length,
    },
    {
      category: "Computers",
      value: computers.length,
    },
    {
      category: "Reports",
      value: reports.length,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={450}>
      <AreaChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" dataKey="x" domain={[0, maxRange]} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="userValue"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="computerValue"
          stackId="2"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="reportValue"
          stackId="3"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
