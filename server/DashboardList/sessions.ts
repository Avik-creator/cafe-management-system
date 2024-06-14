import { cookies } from "next/headers";
import { SESSION_CLOSE_API, SESSION_LIST } from "../ApiList";
import { Session } from "@/types";

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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const closeData = await response.json();

    return {
      status: response.status,
      data: closeData,
    };
  } catch (error) {
    console.error("Error Closing the Session: ", error);
    return 500;
  }
}
