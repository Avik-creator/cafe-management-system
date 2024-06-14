import { Icons } from "@/components/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}
export type SidebarNavItem = NavItemWithChildren;

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}
export type MainNavItem = NavItemWithOptionalChildren;

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

/* API data format */

export type Computers = {
  computer_id: number;
  Model_No: string;
  is_occupied: string;
  os: string;
  status: string;
};

export type Report = {
  report_id: number;
  title: string;
  description: string;
  user: {
    id: number;
    user_name: string;
  };
};

export type Cafe = {
  id: number;
  name: string;
  image: string;
  address: string;
  map_url: string;
  opens_at: string;
  closes_at: string;
  phone: string;
  cgst: number;
  sgst: number;
  gst_number: string;
  license: string;
  price: number;
};

export type report = {
  title: string;
  description: string;
  session: number;
};

export type ReportStatusEnum = [
  { id: 1; name: "Pending" },
  { id: 2; name: "Approved" },
  { id: 3; name: "Rejected" }
];

export type User = {
  id: number;
  password: string;
  last_login: string | null;
  is_superuser: boolean;
  username: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  dob: string | Date;
  time_created: string;
};

// export type User = {
//   username: string;
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone: string;
//   address: string;
//   dob: string | Date;
// };
interface ReportData {
  id: number;
  title: string;
  description: string;
  current_session_id: number;
  report_date: string;
  status: number | null;
}

export type Session = {
  id: number;
  is_ongoing: boolean;
  end: string | null;
  user: number;
  time_created: string;
  report_data: ReportData[];
  sub_total: number;
  user_data: User[];
};
