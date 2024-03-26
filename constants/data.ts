import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};

export type Cafe = {
  id: number;
  name: string;
  address: string;
  license: string;
  gst_number: string;
  contact_number: string;
};


export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];

export type Computers = {
  id: string;
  model_no: string;
  isOccupied: string;
  cafe: Number;
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "User",
    href: "/dashboard/user",
    icon: "user",
    label: "user",
  },
  {
    title: "Computers",
    href: "/dashboard/computers",
    icon: "laptop",
    label: "computer",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Logout",
    href: "/",
    icon: "logo",
    label: "logout",
  },
];


export const CafeList: Cafe[] = [
  {
    id: 1,
    name: "Cafe 1",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    contact_number: "1234567890",
  },
  {
    id: 2,
    name: "Cafe 2",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    contact_number: "1234567890",
  },
  {
    id: 3,
    name: "Cafe 1",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    contact_number: "1234567890",
  },
  {
    id: 4,
    name: "Cafe 1",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    contact_number: "1234567890",
  },
  {
    id: 5,
    name: "Cafe 1",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    contact_number: "1234567890",
  },
  {
    id: 6,
    name: "Cafe 1",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    contact_number: "1234567890",
  },
  {
    id: 7,
    name: "Cafe 1",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    contact_number: "1234567890",
  },
  {
    id: 8,
    name: "Cafe 1",
    address: "123, 4th Street",
    license: "1234567890",
    gst_number: "1234567890",
    contact_number: "1234567890",
  }
];