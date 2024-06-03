import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

const Loading = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-8 w-24" />
      </div>
      <Separator className="my-4" />

      <div className="space-y-8 w-full">
        <div className="md:flex md:flex-col w-full md:w-3/5 lg:w-2/3 gap-8">
          <div className="flex flex-col ml-60 gap-8 w-full">
            <div>
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div>
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div>
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div>
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
