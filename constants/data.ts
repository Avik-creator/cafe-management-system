import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem, User, Computers, Cafe } from "@/types";

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

export const computers: Computers[] = [
  {
    id: 1,
    model_no: "1",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: 2,
    model_no: "2",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: 3,
    model_no: "3",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: 4,
    model_no: "34",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: 5,
    model_no: "25",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: 6,
    model_no: "6",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: 7,
    model_no: "7",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: 8,
    model_no: "8",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: 9,
    model_no: "9",
    isOccupied: "true",
    cafe: 2,
  },
  {
    id: 10,
    model_no: "10",
    isOccupied: "true",
    cafe: 1,
  },
  {
    id: 11,
    model_no: "2",
    isOccupied: "true",
    cafe: 1,
  },
];

export const cafe: Cafe[] = [
  {
    id: 1,
    name: "Cafe A",
    image: "cafe_a.jpg",
    address: "123 Main Street",
    map_url: "https://maps.google.com/cafe_a",
    opens_at: "08:00 AM",
    closes_at: "10:00 PM",
    phone: "+1234567890",
    cgst: 5,
    sgst: 5,
    gst_number: "GST123456789",
    license: "ABC123",
    price: 10
  },
  {
    id: 2,
    name: "Cafe B",
    image: "cafe_b.jpg",
    address: "456 Elm Street",
    map_url: "https://maps.google.com/cafe_b",
    opens_at: "07:30 AM",
    closes_at: "09:30 PM",
    phone: "+1987654321",
    cgst: 6,
    sgst: 6,
    gst_number: "GST987654321",
    license: "DEF456",
    price: 12
  },
  {
    id: 3,
    name: "Cafe C",
    image: "cafe_c.jpg",
    address: "789 Oak Street",
    map_url: "https://maps.google.com/cafe_c",
    opens_at: "09:00 AM",
    closes_at: "11:00 PM",
    phone: "+1122334455",
    cgst: 7,
    sgst: 7,
    gst_number: "GST1122334455",
    license: "GHI789",
    price: 15
  },
  {
    id: 4,
    name: "Cafe D",
    image: "cafe_d.jpg",
    address: "321 Pine Street",
    map_url: "https://maps.google.com/cafe_d",
    opens_at: "08:30 AM",
    closes_at: "10:30 PM",
    phone: "+9988776655",
    cgst: 8,
    sgst: 8,
    gst_number: "GST9988776655",
    license: "JKL012",
    price: 18
  },
  {
    id: 5,
    name: "Cafe E",
    image: "cafe_e.jpg",
    address: "567 Maple Street",
    map_url: "https://maps.google.com/cafe_e",
    opens_at: "07:00 AM",
    closes_at: "09:00 PM",
    phone: "+5544332211",
    cgst: 9,
    sgst: 9,
    gst_number: "GST5544332211",
    license: "MNO345",
    price: 20
  },
  {
    id: 6,
    name: "Cafe F",
    image: "cafe_f.jpg",
    address: "987 Cedar Street",
    map_url: "https://maps.google.com/cafe_f",
    opens_at: "08:00 AM",
    closes_at: "10:00 PM",
    phone: "+6677889900",
    cgst: 10,
    sgst: 10,
    gst_number: "GST6677889900",
    license: "PQR678",
    price: 22
  },
  {
    id: 7,
    name: "Cafe G",
    image: "cafe_g.jpg",
    address: "654 Walnut Street",
    map_url: "https://maps.google.com/cafe_g",
    opens_at: "07:30 AM",
    closes_at: "09:30 PM",
    phone: "+1122334455",
    cgst: 11,
    sgst: 11,
    gst_number: "GST1122334455",
    license: "STU901",
    price: 25
  },
  {
    id: 8,
    name: "Cafe H",
    image: "cafe_h.jpg",
    address: "234 Oak Street",
    map_url: "https://maps.google.com/cafe_h",
    opens_at: "09:00 AM",
    closes_at: "11:00 PM",
    phone: "+9988776655",
    cgst: 12,
    sgst: 12,
    gst_number: "GST9988776655",
    license: "VWX234",
    price: 28
  },
  {
    id: 9,
    name: "Cafe I",
    image: "cafe_i.jpg",
    address: "345 Pine Street",
    map_url: "https://maps.google.com/cafe_i",
    opens_at: "08:30 AM",
    closes_at: "10:30 PM",
    phone: "+5544332211",
    cgst: 13,
    sgst: 13,
    gst_number: "GST5544332211",
    license: "YZA567",
    price: 30
  },
  {
    id: 10,
    name: "Cafe J",
    image: "cafe_j.jpg",
    address: "876 Elm Street",
    map_url: "https://maps.google.com/cafe_j",
    opens_at: "07:00 AM",
    closes_at: "09:00 PM",
    phone: "+6677889900",
    cgst: 14,
    sgst: 14,
    gst_number: "GST6677889900",
    license: "BCD345",
    price: 35
  },
  {
    id: 11,
    name: "Cafe K",
    image: "cafe_k.jpg",
    address: "567 Walnut Street",
    map_url: "https://maps.google.com/cafe_k",
    opens_at: "08:00 AM",
    closes_at: "10:00 PM",
    phone: "+1122334455",
    cgst: 15,
    sgst: 15,
    gst_number: "GST1122334455",
    license: "EFG678",
    price: 40
  },
  {
    id: 12,
    name: "Cafe L",
    image: "cafe_l.jpg",
    address: "234 Maple Street",
    map_url: "https://maps.google.com/cafe_l",
    opens_at: "07:30 AM",
    closes_at: "09:30 PM",
    phone: "+9988776655",
    cgst: 16,
    sgst: 16,
    gst_number: "GST9988776655",
    license: "HIJ901",
    price: 45
  },
  {
    id: 13,
    name: "Cafe M",
    image: "cafe_m.jpg",
    address: "123 Cedar Street",
    map_url: "https://maps.google.com/cafe_m",
    opens_at: "09:00 AM",
    closes_at: "11:00 PM",
    phone: "+1122334455",
    cgst: 17,
    sgst: 17,
    gst_number: "GST1122334455",
    license: "KLM012",
    price: 50
  }

]





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
    title: "Logout",
    href: "/",
    icon: "logo",
    label: "logout",
  },
];
