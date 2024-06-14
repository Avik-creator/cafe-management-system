"use server";

import { cookies } from "next/headers";
import { SESSION_CLOSE_API, SESSION_LIST, START_SESSION } from "../ApiList";
import { Session } from "@/types";
import { getUserId } from "../Auth/authAPI";
import { revalidatePath } from "next/cache";

export async function getSessionList(): Promise<Session[]> {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    if (!accessToken) {
      throw new Error("No access token available");
    }

    const response = await fetch(SESSION_LIST, {
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

export async function closeSpecificSession(userId: string) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    if (!accessToken) {
      throw new Error("No Access Token Avaliable. Intruder Alert!!!");
    }

    const response = await fetch(`${SESSION_CLOSE_API}/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const closeData = await response.json();

    revalidatePath("/dashboard/sessions");

    return {
      status: response.status,
      data: closeData as Session,
    };
  } catch (error) {
    console.error("Error Closing the Session: ", error);
    return {
      status: 500,
    };
  }
}

export async function startSession(data: any) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    const user = await getUserId();

    const payload = {
      user,
      modelno: data,
    };

    const response = await fetch(START_SESSION, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.log("Session could not be started");

      throw new Error(`Error: ${response.statusText}`);
    }
    return 200;
  } catch (error) {
    console.error("Error loading computers:", error);
    return null;
  }
}

export async function closeSession() {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    const user_id = await getUserId();

    const response = await fetch(`${SESSION_CLOSE_API}/${user_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      console.log("Session could not be closed or not found.");
      return 404;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading computers:", error);
    return null;
  }
}
