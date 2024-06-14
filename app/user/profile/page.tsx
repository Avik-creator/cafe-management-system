"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  closeSession,
  editCafeUserProfile,
  getCafeUserProfile,
  reportSubmit,
  showListAvailableComputers,
  signout,
  startSession,
} from "@/server/Auth/authAPI";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
// import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Skeleton } from "@/components/ui/skeleton";

export default function Component() {
  const { toast } = useToast();
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
  const [profileLoading, setProfileLoading] = useState(true);

  const [isSelectDisabled, setIsSelectDisabled] = useState(false);
  const [computerList, setComputerList] = useState<Array<{ Model_No: string }>>(
    []
  );
  const [selectedValue, setSelectedValue] = useState("");

  const [editFormData, setEditFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
  });
  const [editConfirmDetails, setEditConfirmDetails] = useState({
    username: "",
    password: "",
  });

  const [reportFormData, setReportFormData] = useState({
    title: "",
    description: "",
  });

  const [billDetails, setBillDetails] = useState({
    Cafeusername: "Loading...",
    price: "Loading...",
  });

  const [logoutDisabled, setLogoutDisabled] = useState(false);

  const [localValue, setLocalValue, localKeyExists, removeLocal] =
    useLocalStorage<string>("system", "");

  const handleEditFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value, editFormData);
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleConfirmEditBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditConfirmDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReportFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setReportFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    async function loadUserProfile() {
      try {
        const profileData = await getCafeUserProfile();
        if (profileData) {
          setProfileLoading(false);
          setUserProfile(profileData);
        } else {
          setProfileLoading(true);
          toast({
            title: "Failed to fetch profile",
            description: "Please reload the page or login again",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    async function loadComputerList() {
      const computerList = await showListAvailableComputers();
      setComputerList(computerList);
    }
    loadUserProfile();

    if (userProfile && localKeyExists()) {
      setSelectedValue(localValue);
      setIsSelectDisabled(true);
      } else {
      loadComputerList();
    }
  }, []);

  useEffect(() => {
    // Update editFormData only when userProfile changes and userProfile.username is set
    if (userProfile && userProfile.username !== "") {
      const { username, ...rest } = userProfile;
      setEditFormData(rest); // Update editFormData with rest of the fields
    }
  }, [userProfile]);


  const handleComputerSelectSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSelectDisabled(true);

    await startSession(selectedValue);

    setLogoutDisabled(true);
    setLocalValue(selectedValue);
  };

  const handleReportSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = await reportSubmit(reportFormData);
    console.log(data);

    if (data) {
      toast({
        title: "Report Submitted ",
        description: "Your report has been submitted successfully",
      });
    } else {
      toast({
        title: "Report Submission failed ",
        description: "Report submission failed. Try Again",
      });
    }
  };

  const handleEditSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(editFormData);

    const mergedData = {
      ...editFormData,
      ...editConfirmDetails,
    };
    const data = await editCafeUserProfile(mergedData);

    if (data) {
      toast({
        title: "Account Details Updated ",
        description: "Your account details has been successfully updated",
      });
    } else {
      toast({
        title: "Account Update Failed",
        description:
          "Your account could not be updated. Please try again some time later.",
      });
    }
  };

  const exitSession = async () => {
    const billData = await closeSession();
    if (billData === 404) {
      setBillDetails({
        Cafeusername: "-",
        price: "0",
      });
    } else {
      setBillDetails(billData);
      removeLocal();
      setLogoutDisabled(false);
    }
  };

  const logout = async () => {
    setLogoutDisabled(true);
    toast({
      title: "Logging you out ...",
      variant: "default",
    });
    try {
      await signout();
      toast({
        title: "Logged out successfully",
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "Could not log you out",
        description: "Please try to log out some time later",
        variant: "destructive",
      });
    }
    router.push("/user/signin");
  };

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
              className="rounded-full invert"
              height="32"
              src="https://svgshare.com/i/7aS.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />

            {!profileLoading ? (
              <div className="font-semibold">{`${userProfile?.username}`}</div>
            ) : (
              <Skeleton className="h-4 w-[100px]" />
            )}

            <Button size="sm" variant="secondary">
              Report Problem
            </Button>
            <Button size="sm" variant="outline">
              My account
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    exitSession();
                  }}
                >
                  Logout
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-center">
                    Bill Details
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-center font-bold text-lg">
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 items-center gap-2">
                        <span className="text-right font-normal">
                          Billing Name:{" "}
                        </span>
                        <span className="text-left">
                          {billDetails.Cafeusername ?? "-"}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 items-center gap-4">
                        <span className="text-right font-normal">
                          Total Bill:{" "}
                        </span>
                        <span className="text-left">
                          Rs. {billDetails.price ?? 0}
                        </span>
                      </div>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  {/* <AlertDialogCancel hidden>Cancel</AlertDialogCancel> */}
                  <AlertDialogAction onClick={logout} disabled={logoutDisabled}>
                    Logout
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </header>

        <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6 ">
          <form onSubmit={handleComputerSelectSubmit} className="flex flex-row">
            <Select name="modelno" value={selectedValue} onValueChange={handleSelectChange}>
              <SelectTrigger
                className="w-1/4 bg-slate-700"
                disabled={computerList.length <= 0 || isSelectDisabled}
              >
                <SelectValue placeholder="Select a Computer" />
              </SelectTrigger>
              <SelectContent>
                {computerList.map((computer) => (
                  <SelectItem key={computer.Model_No} value={computer.Model_No}>
                    {computer.Model_No}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              disabled={computerList.length <= 0 || isSelectDisabled}
              type="submit"
              className="gap-4"
            >
              Submit
            </Button>
          </form>

          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Account information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm">
                <div>
                  <div className="font-medium">Name</div>
                  {!profileLoading ? (
                    <div>
                      {userProfile.first_name} {userProfile.last_name}
                    </div>
                  ) : (
                    <Skeleton className="h-5 w-[250px]" />
                  )}
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  {!profileLoading ? (
                    <div>{userProfile.email}</div>
                  ) : (
                    <Skeleton className="h-5 w-[250px]" />
                  )}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Report Problem</CardTitle>
                {/* <Button size="sm" variant="secondary">
                  Report Problem
                </Button> */}
              </CardHeader>
              <CardContent className="">
                <form onSubmit={handleReportSubmit} className="grid gap-4">
                  <div>
                    <Label className="sr-only" htmlFor="report-title">
                      Title
                    </Label>
                    <Input
                      name="title"
                      id="report-title"
                      placeholder="Report title"
                      value={reportFormData.title}
                      onChange={handleReportFormChange}
                      disabled={!isSelectDisabled}
                    />
                  </div>
                  <div>
                    <Label className="sr-only" htmlFor="report-desc">
                      Description
                    </Label>
                    <Textarea
                      name="description"
                      id="report-desc"
                      placeholder="Report Description"
                      value={reportFormData.description}
                      onChange={handleReportFormChange}
                      disabled={!isSelectDisabled}
                    />
                  </div>
                  <CardFooter className="flex flex-row items-center justify-between">
                    <Button
                      className="ml-auto"
                      type="submit"
                      disabled={!isSelectDisabled}
                    >
                      Submit Report
                    </Button>
                  </CardFooter>
                </form>
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
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label className="sr-only" htmlFor="first-name">
                        First Name
                      </Label>

                      <Input
                        name="first_name"
                        type="text"
                        id="first-name"
                        placeholder="First Name"
                        disabled={!isEditing}
                        value={editFormData.first_name}
                        onChange={handleEditFormChange}
                      />
                    </div>
                    <div>
                      <Label className="sr-only" htmlFor="last-name">
                        Last Name
                      </Label>
                      <Input
                        name="last_name"
                        type="text"
                        id="last-name"
                        placeholder="Last Name"
                        disabled={!isEditing}
                        value={editFormData.last_name}
                        onChange={handleEditFormChange}
                      />
                    </div>
                    <div>
                      <Label className="sr-only" htmlFor="email-address">
                        Email Address
                      </Label>
                      <Input
                        name="email"
                        type="email"
                        id="email-address"
                        placeholder="Email address"
                        disabled={!isEditing}
                        value={editFormData.email}
                        onChange={handleEditFormChange}
                      />
                    </div>
                    <div>
                      <Label className="sr-only" htmlFor="phone-number">
                        Phone Number
                      </Label>
                      <Input
                        name="phone"
                        type="number"
                        id="phone-number"
                        placeholder="Phone Number"
                        disabled={!isEditing}
                        value={editFormData.phone}
                        onChange={handleEditFormChange}
                      />
                    </div>
                    <div>
                      <Label className="sr-only" htmlFor="dob">
                        Date of Birth
                      </Label>
                      <Input
                        name="dob"
                        id="dob"
                        placeholder="Date of Birth"
                        type="date"
                        disabled={!isEditing}
                        value={editFormData.dob}
                        onChange={handleEditFormChange}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label className="sr-only" htmlFor="address">
                      Address
                    </Label>
                    <Input
                      name="address"
                      id="address"
                      placeholder="Enter your address"
                      type="text"
                      disabled={!isEditing}
                      value={editFormData.address}
                      onChange={handleEditFormChange}
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-row items-center justify-between">
                <Button variant={"ghost"} disabled={!isEditing}>
                  Cancel
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="ml-auto" disabled={!isEditing}>
                      Save changes
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Enter your username and password to make changes to your
                        profile.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleEditSubmit}>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input
                            name="username"
                            type="text"
                            id="username"
                            className="col-span-3"
                            value={editConfirmDetails.username}
                            onChange={handleConfirmEditBoxChange}
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="password" className="text-right">
                            Password
                          </Label>
                          <Input
                            name="password"
                            type="password"
                            id="password"
                            className="col-span-3"
                            value={editConfirmDetails.password}
                            onChange={handleConfirmEditBoxChange}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="submit">Save changes</Button>
                        </DialogClose>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </ScrollArea>
  );
}
