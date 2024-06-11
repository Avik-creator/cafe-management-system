"use client";
import { useEffect, useState } from "react";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCafeUserProfile, getUserId, signout } from "@/server/Auth/authAPI";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export default function Component() {

  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
  });

  const logout = async () => {
    await signout();
    router.push("/user/signin");
  };

  useEffect(() => {
    async function loadUserProfileId() {
      // const user_id = await getUserId()
      // console.log("USER ID IN PROFILE PAGE", user_id);.
      const profileData = await getCafeUserProfile();
      setUserProfile(profileData);
    }
    loadUserProfileId();
  }, []);

  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col min-h-screen mb-20">
        <header className="flex flex-col lg:flex-row items-center justify-center h-14 p-10 border-b lg:h-20 bg-gray-100/40 dark:bg-gray-800/40">
          <div className="font-semibold">
            Cyber Cafe Management System: User Profile
          </div>
          <div className="lg:ml-auto flex items-center gap-2 justify-center">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <div className="font-semibold">{`${userProfile.username}`}</div>
            <Button size="sm" variant="outline">
              View history
            </Button>
            <Button size="sm" variant="outline">
              My account
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Button>
          </div>
        </header>
        <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6 ">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Account information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm">
                <div>
                  <div className="font-medium">Email</div>
                  <div>{userProfile.email}</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Usage history</CardTitle>
                <Button size="sm" variant="outline">
                  View history
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
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Personal information</CardTitle>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => {
                    setIsEditing((prev) => !prev);
                  }}
                >
                  Edit details
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label className="sr-only" htmlFor="name">
                      Name
                    </Label>
                    <Input id="name" placeholder="Name" disabled={!isEditing} />
                  </div>
                  <div>
                    <Label className="sr-only" htmlFor="dob">
                      Date of Birth
                    </Label>
                    <Input
                      id="dob"
                      placeholder="Date of Birth"
                      type="date"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Label className="sr-only" htmlFor="address">
                    Password
                  </Label>
                  <Input
                    id="address"
                    placeholder="Enter your address"
                    type="password"
                    disabled={!isEditing}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center justify-between">
                <Button className="" variant={"ghost"} disabled={!isEditing}>
                  Cancel
                </Button>
                <Button className="ml-auto" disabled={!isEditing}>
                  Save changes
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </ScrollArea>
  );
}
