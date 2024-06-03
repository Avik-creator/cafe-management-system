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

export type User = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
};

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

export type Session = {
  is_ongoing: boolean;
  start: string;
  user: number;
  end: string;
  cafe: number;
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
