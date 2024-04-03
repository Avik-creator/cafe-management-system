"use client";

import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { TableCell, TableRow, TableBody, Table } from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CreateProfileOne } from "./forms/user-profile-stepper/create-profile";

export default function ViewUserProfile() {
  const [editInfo, setEditInfo] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-col md:flex-row items-center min-h-full border-b lg:min-h-fit bg-gray-100/40 dark:bg-gray-800/40 p-4 rounded-sm">
        <div className="w-full flex flex-col md:flex-row md:space-around">
          <div className="flex flex-row gap-4 mb-2 md:mb-0">
            <Image
              src="/user-avatar-placeholder.jpg"
              alt="user avatar"
              className="rounded-full"
              height="32"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <div className="font-semibold text-lg">John Doe</div>
          </div>
          <div className="ml-auto">
            <Button size="sm" variant="outline">
              <Link href={"#usage-history"}>View history</Link>
            </Button>
            <Button size="sm" variant="outline">
              Logout
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Account information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2 text-sm">
              <div>
                <div className="font-medium">Email</div>
                <div>john@example.com</div>
              </div>
              <div>
                <div className="font-medium">Account Creation Date</div>
                <div>Aug 15, 2023</div>
              </div>
            </CardContent>
          </Card>
          <Card id="usage-history">
            <CardHeader className="flex flex-row justify-between items-center pt-4">
              <CardTitle>Usage history</CardTitle>
              <Button size="sm" variant="outline">
                View complete history
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>2022-06-23</TableCell>
                    <TableCell>12:34:56</TableCell>
                    <TableCell>1:23:45</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2022-06-22</TableCell>
                    <TableCell>08:12:34</TableCell>
                    <TableCell>2:30:15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2022-06-21</TableCell>
                    <TableCell>18:45:23</TableCell>
                    <TableCell>0:45:00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row justify-between items-center pt-4">
              <CardTitle>Account Details</CardTitle>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setEditInfo((prevState) => !prevState);
                }}
              >
                Edit info
              </Button>
            </CardHeader>
            <CardContent>
              <CreateProfileOne disabled={!editInfo} initialData={null} />
              {/* <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className="sr-only" htmlFor="name">
                    Name
                  </Label>
                  <Input id="name" placeholder="Name" disabled={editInfo} />
                </div>
                <div>
                  <Label className="sr-only" htmlFor="username">
                    Username
                  </Label>
                  <Input
                    id="username"
                    placeholder="User Name"
                    type="text"
                    disabled={editInfo}
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 mt-4">
                <Label className="sr-only" htmlFor="password">
                  Password
                </Label>
                <Input
                  id="confirm-password"
                  placeholder="Password"
                  type="password"
                  disabled={editInfo}
                />
                <Label className="sr-only" htmlFor="password">
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  placeholder="Confirm Password"
                  type="password"
                  disabled={editInfo}
                />
              </div> */}
            </CardContent>
            <CardFooter>
              <Button
                className="ml-auto"
                variant={"destructive"}
                disabled={editInfo}
              >
                Delete Account
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
