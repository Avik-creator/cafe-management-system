import BreadCrumb from "@/components/breadcrumb";
import { CreateProfileOne } from "@/components/forms/Admin Forms/user-profile-stepper/create-profile";
import { ScrollArea } from "@/components/ui/scroll-area";
import ViewUserProfile from "@/components/view-profile";

const breadcrumbItems = [{ title: "Profile", link: "/dashboard/profile" }];
export default function page() {
  return (
    <ScrollArea className="relative h-screen">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 mb-20">
        <BreadCrumb items={breadcrumbItems} />
        <ViewUserProfile />
      </div>
    </ScrollArea>
  );
}
