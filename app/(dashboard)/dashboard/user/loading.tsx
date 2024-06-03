import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="relative">
      <div className="flex items-center pt-2 space-x-4">
        <Skeleton className="h-8 w-full md:max-w-sm" />
        <Skeleton className="h-8 w-24" />
      </div>

      <div className="rounded-md border h-[calc(80vh-220px)] mt-4">
        <table className="w-full table-fixed">
          <thead>
            <tr>
              {Array.from({ length: 5 }).map((_, index) => (
                <th key={index} className="p-2">
                  <Skeleton className="h-4 w-full" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 5 }).map((_, cellIndex) => (
                  <td key={cellIndex} className="p-2">
                    <Skeleton className="h-4 w-full" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row items-center justify-end space-x-2 pt-0 md:pt-2">
        <Skeleton className="h-8 w-32" />
        <div className="flex items-center justify-between sm:justify-end gap-2 w-full">
          <Skeleton className="h-8 w-24" />
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
