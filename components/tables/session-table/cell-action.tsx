"use client";
import { AlertModal } from "@/components/modal/alert-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { closeSpecificSession } from "@/server/DashboardList/sessions";
import { Computers, Report, Session } from "@/types";
import { Edit, MoreHorizontal, Trash, PanelRightCloseIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

interface CellActionProps {
  data: Session;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const onConfirm = async () => {
    setLoading(true);
    try {
      const response = await closeSpecificSession(String(data.user_data[0].id));
      if (response.status == 200) {
        toast({
          variant: "success",
          title: "Session Closed",
          description: "Session has been successfully closed.",
        });
      }
      setLoading(false);
      setOpen(false);
    } catch (error) {
      console.error("Error deleting computer:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
        title={`Bill Amount: Rs. ${data.sub_total}`}
        description={`User: ${data.user_data[0].username} is about to be closed. Are you sure?`}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild disabled={!data.is_ongoing}>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => setOpen(true)}>
            <PanelRightCloseIcon className="mr-2 h-4 w-4" /> Close
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
