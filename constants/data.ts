import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";

export type User = {
  id: number;
  email: string;
  name: string;
  phone: string,
  address: string,
  cafe: number,
  dob: string
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
    "id": 1,
    "email": "user1@example.com",
    "name": "User 1",
    "phone": "+1-218-335-7684",
    "address": "Address 1",
    "cafe": 3,
    "dob": "1990-01-05"
  },
  {
    "id": 2,
    "email": "user2@example.com",
    "name": "User 2",
    "phone": "+1-123-335-2345",
    "address": "Address 2",
    "cafe": 2,
    "dob": "1985-09-23"
  },
  {
    "id": 3,
    "email": "user3@example.com",
    "name": "User 3",
    "phone": "+1-899-756-4123",
    "address": "Address 3",
    "cafe": 4,
    "dob": "1992-11-11"
  },
  {
    "id": 4,
    "email": "user4@example.com",
    "name": "User 4",
    "phone": "+1-456-234-7890",
    "address": "Address 4",
    "cafe": 5,
    "dob": "1983-06-15"
  },
  {
    "id": 5,
    "email": "user5@example.com",
    "name": "User 5",
    "phone": "+1-890-567-1234",
    "address": "Address 5",
    "cafe": 1,
    "dob": "1989-07-28"
  },
  {
    "id": 6,
    "email": "user6@example.com",
    "name": "User 6",
    "phone": "+1-345-876-9876",
    "address": "Address 6",
    "cafe": 3,
    "dob": "1994-03-19"
  },
  {
    "id": 7,
    "email": "user7@example.com",
    "name": "User 7",
    "phone": "+1-678-678-2345",
    "address": "Address 7",
    "cafe": 2,
    "dob": "1987-02-09"
  },
  {
    "id": 8,
    "email": "user8@example.com",
    "name": "User 8",
    "phone": "+1-987-789-4567",
    "address": "Address 8",
    "cafe": 4,
    "dob": "1991-10-31"
  },
  {
    "id": 9,
    "email": "user9@example.com",
    "name": "User 9",
    "phone": "+1-654-890-5678",
    "address": "Address 9",
    "cafe": 5,
    "dob": "1997-12-25"
  },
  {
    "id": 10,
    "email": "user10@example.com",
    "name": "User 10",
    "phone": "+1-234-567-6789",
    "address": "Address 10",
    "cafe": 1,
    "dob": "1986-05-04"
  },
  {
    "id": 11,
    "email": "user11@example.com",
    "name": "User 11",
    "phone": "+1-567-345-9876",
    "address": "Address 11",
    "cafe": 3,
    "dob": "1993-08-13"
  },
  {
    "id": 12,
    "email": "user12@example.com",
    "name": "User 12",
    "phone": "+1-987-123-4567",
    "address": "Address 12",
    "cafe": 2,
    "dob": "1984-04-17"
  },
  {
    "id": 13,
    "email": "user13@example.com",
    "name": "User 13",
    "phone": "+1-345-678-8901",
    "address": "Address 13",
    "cafe": 4,
    "dob": "1990-11-22"
  },
  {
    "id": 14,
    "email": "user14@example.com",
    "name": "User 14",
    "phone": "+1-678-890-1234",
    "address": "Address 14",
    "cafe": 5,
    "dob": "1985-02-07"
  },
  {
    "id": 15,
    "email": "user15@example.com",
    "name": "User 15",
    "phone": "+1-123-456-7890",
    "address": "Address 15",
    "cafe": 1,
    "dob": "1996-09-10"
  },
  {
    "id": 16,
    "email": "user16@example.com",
    "name": "User 16",
    "phone": "+1-456-789-0123",
    "address": "Address 16",
    "cafe": 3,
    "dob": "1988-07-26"
  },
  {
    "id": 17,
    "email": "user17@example.com",
    "name": "User 17",
    "phone": "+1-789-012-3456",
    "address": "Address 17",
    "cafe": 2,
    "dob": "1995-12-29"
  },
  {
    "id": 18,
    "email": "user18@example.com",
    "name": "User 18",
    "phone": "+1-234-567-8901",
    "address": "Address 18",
    "cafe": 4,
    "dob": "1983-03-14"
  },
  {
    "id": 19,
    "email": "user19@example.com",
    "name": "User 19",
    "phone": "+1-567-890-1234",
    "address": "Address 19",
    "cafe": 5,
    "dob": "1998-01-08"
  },
  {
    "id": 20,
    "email": "user20@example.com",
    "name": "User 20",
    "phone": "+1-890-123-4567",
    "address": "Address 20",
    "cafe": 1,
    "dob": "1987-04-20"
  },
  {
    "id": 21,
    "email": "user21@example.com",
    "name": "User 21",
    "phone": "+1-345-678-9012",
    "address": "Address 21",
    "cafe": 3,
    "dob": "1992-10-03"
  },
  {
    "id": 22,
    "email": "user22@example.com",
    "name": "User 22",
    "phone": "+1-678-901-2345",
    "address": "Address 22",
    "cafe": 2,
    "dob": "1989-06-16"
  },
  {
    "id": 23,
    "email": "user23@example.com",
    "name": "User 23",
    "phone": "+1-901-234-5678",
    "address": "Address 23",
    "cafe": 4,
    "dob": "1994-08-25"
  },
  {
    "id": 24,
    "email": "user24@example.com",
    "name": "User 24",
    "phone": "+1-234-567-8901",
    "address": "Address 24",
    "cafe": 5,
    "dob": "1984-02-12"
  },
  {
    "id": 25,
    "email": "user25@example.com",
    "name": "User 25",
    "phone": "+1-567-890-1234",
    "address": "Address 25",
    "cafe": 1,
    "dob": "1991-05-29"
  }
]




export type Computers = {
  id: string;
  model_no: string;
  isOccupied: string;
  cafe: Number;
};

export const Computers: Computers[] = [
  {
    id: "1",
    model_no: "1",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: "2",
    model_no: "2",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: "3",
    model_no: "3",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: "4",
    model_no: "34",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: "5",
    model_no: "25",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: "6",
    model_no: "6",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: "7",
    model_no: "7",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: "8",
    model_no: "8",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: "9",
    model_no: "9",
    isOccupied: "true",
    cafe: 2,
  },
  {
    id: "10",
    model_no: "10",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: "11",
    model_no: "2",
    isOccupied: "true",
    cafe: 1,
  },
];

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