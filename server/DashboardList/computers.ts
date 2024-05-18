"use server";

import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
import next from "next";
import { cache } from "react";

interface addComputers {
  modelno: string;
  is_occupied: string;
  os: string;
  status: string;
  current_session: string;
}

const COMPUTER_URL = "http://localhost:8000/v1/computer/list";
const ADD_COMPUTERS = "http://localhost:8000/v1/computer/add";

export async function getComputerList() {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    if (!accessToken) {
      throw new Error("No access token available");
    }

    const response = await fetch(COMPUTER_URL, {
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
    console.error("Error fetching computer list:", error);
    return null;
  }
}

export async function addComputers(computer: addComputers) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    if (!accessToken) {
      throw new Error("No access token available");
    }

    const response = await fetch(ADD_COMPUTERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(computer),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    revalidatePath("/dashboard/computers");

    const data = await response.json();

    return response.status;
  } catch (error) {
    console.error("Error adding computer:", error);
    return null;
  }
}

export async function deleteComputers(computerId: string) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    if (!accessToken) {
      throw new Error("No access token available");
    }

    const response = await fetch(
      `http://localhost:8000/v1/computer/manage/${computerId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    revalidatePath("/dashboard/computers");

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return response.status;
  } catch (error) {
    console.error("Error deleting computer:", error);
    return null;
  }
}

export async function updateComputer(
  computerId: string,
  computer: addComputers
) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    if (!accessToken) {
      throw new Error("No access token available");
    }

    const response = await fetch(
      `http://localhost:8000/v1/computer/manage/${computerId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(computer),
      }
    );

    revalidatePath("/dashboard/computers");

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return response.status;
  } catch (error) {
    console.error("Error updating computer:", error);
    return null;
  }
}

export async function getComputer(computerId: string) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    if (!accessToken) {
      throw new Error("No access token available");
    }

    const response = await fetch(
      `http://localhost:8000/v1/computer/manage/${computerId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching computer:", error);
    return null;
  }
}
