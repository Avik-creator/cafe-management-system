"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const BASE_URL = "http://4.227.136.16:8080";

interface Report {
  report_id: number;
  title: string;
  description: string;
  status: string;
  report_date: string;
  user: {
    id: number;
    user_name: string;
  };
}

export async function getReportList(): Promise<Report[]> {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    if (!accessToken) {
      throw new Error("No access token available");
    }

    const response = await fetch(`${BASE_URL}/v1/report/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching reports list:", error);
    return [];
  }
}

// For CRUD Operations: http://4.227.136.16:8080/v1/report/manage/1

export async function getReportById(reportId: string): Promise<Report | null> {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    if (!accessToken) {
      throw new Error("No access token available");
    }

    const response = await fetch(`${BASE_URL}/v1/report/manage/${reportId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching report:", error);
    return null;
  }
}

export async function updateReport(reportId: string, statusId: Number) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    if (!accessToken) {
      throw new Error("No access token available");
    }

    const response = await fetch(`${BASE_URL}/v1/report/manage/${reportId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ status: statusId }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      data,
      status: response.status,
    };
  } catch (error) {
    console.error("Error updating report:", error);
    return null;
  }
}
