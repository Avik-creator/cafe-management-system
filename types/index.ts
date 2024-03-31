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
  id: number;
  email: string;
  name: string;
  phone: string;
  address: string;
  userName: string;
  dob: string;
};

export type Computers = {
  id: number;
  model_no: string;
  isOccupied: string;
  OS: string;
  IP_Address: string;
  Status: string;
  Last_used_by: string;
};

export type Report = {
  id: number;
  userId: number;
  title: string;
  description: string;
  date_of_submit: string;
  status: string;
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
