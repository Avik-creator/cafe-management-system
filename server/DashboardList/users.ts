"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { USER_LISTURL, ADD_USER, MANAGE_USER } from "../ApiList";

interface User {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  dob: Date;
}

export async function getUsersList(): Promise<User[] | null> {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    if (!accessToken) {
      throw new Error("No access token available");
    }

    const response = await fetch(USER_LISTURL, {
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
    console.error("Error fetching users list:", error);
    return null;
  }
}

export async function addUser(user: User) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    if (!accessToken) {
      throw new Error("No access token available");
    }

    const response = await fetch(ADD_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    revalidatePath("/dashboard/user");

    return response.status;
  } catch (error) {
    console.error("Error adding user:", error);
    return 500;
  }
}

export async function getSpecificUser(id: String) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    if (!accessToken) {
      throw new Error("No access token available");
    }

    const response = await fetch(`${MANAGE_USER}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    revalidatePath("/dashboard/user");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching specific user:", error);
    return null;
  }
}

export async function updateUser(user: any, id: String) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    if (!accessToken) {
      throw new Error("No access token available");
    }

    const response = await fetch(`${MANAGE_USER}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    revalidatePath("/dashboard/user");
    return 200;
  } catch (error) {
    console.error("Error updating user:", error);
    return 500;
  }
}
