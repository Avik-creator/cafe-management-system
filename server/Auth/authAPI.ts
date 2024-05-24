"use server";

import { cookies } from "next/headers";

const AUTH_URL = "http://localhost:8000/v1/user/token";

export async function getUserAuth(username: string, password: string) {
  try {
    const response = await fetch(AUTH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        return 401;
      }

      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    cookies().set("access", data.access, { httpOnly: true, path: "/" });
    cookies().set("refresh", data.refresh, { httpOnly: true, path: "/" });

    return 200;
  } catch (error) {
    console.error("Error fetching user auth:", error);
    return 500; // Internal Server Error
  }
}
