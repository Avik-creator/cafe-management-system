"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { JwtPayload as DefaultJwtPayload, jwtDecode } from "jwt-decode";
import {
  AUTH_URL,
  REGISTER_URL,
  MANAGE_PROFILE_URL,
  ADD_REPORT_URL,
  GET_COMPUTER_LIST_URL,
  CHANGE_USER_PASSWORD_URL,
} from "../ApiList";

interface JwtPayload extends DefaultJwtPayload {
  user_id: string;
}

const cookieDecoding = (token: string): JwtPayload => {
  const decodedToken = jwtDecode<JwtPayload>(token);
  return decodedToken;
};

export const getUserId = () => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    if (!accessToken) {
      throw new Error("No access token available");
    }

    const jwtDecoded = cookieDecoding(accessToken as string);

    return jwtDecoded.user_id;
  } catch (error) {
    console.error("Error retrieving user ID:", error);
    return null;
  }
};

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
        return {
          status: response.status,
          message: "Incorrect username or password",
        };
      }
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    cookies().set("access", data.access, { httpOnly: true, path: "/" });
    cookies().set("refresh", data.refresh, { httpOnly: true, path: "/" });

    const retrievedUserId = await getUserId();

    return { status: 200, user_id: retrievedUserId };
  } catch (error) {
    console.error("Error fetching user auth:", error);
    return { status: 500 };
  }
}

export async function signout() {
  cookies().delete("access");
  cookies().delete("refresh");
  cookies().delete("csrftoken");
  cookies().delete("next-auth.callback-url");
  cookies().delete("next-auth.csrf-token");
  redirect("/");
}

export async function signUpCafeUser(data: any) {
  try {
    const response = await fetch(REGISTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });


    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const resData = response.json();
    return response.status;
  } catch (error) {
    console.log("Server Error in sign up cafe user.");
    return null;
  }
}

export async function getCafeUserProfile() {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    const user_id = await getUserId();

    const response = await fetch(`${MANAGE_PROFILE_URL}/${user_id}`, {
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
    const { id, ...userData } = data;

    return userData;
  } catch (error) {
    console.error("Error fetching user profile details:", error);
    return null;
  }
}

export async function editCafeUserProfile(data: any) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    const user_id = await getUserId();

    const response = await fetch(`${MANAGE_PROFILE_URL}/${user_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const resData = await response.json();
    const { id, ...userData } = resData;

    return userData;
  } catch (error) {
    console.error("Error fetching user profile details:", error);
    return null;
  }
}

export async function reportSubmit(reportDetails: any) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    const user = await getUserId();

    const payload = {
      user,
      ...reportDetails,
    };

    const response = await fetch(ADD_REPORT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const reportData = await response.json();
    return reportData;
  } catch (error) {
    console.error("Error submitting report:", error);
    return null;
  }
}

export async function showListAvailableComputers() {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;

    const response = await fetch(GET_COMPUTER_LIST_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const computerList = await response.json();
    return computerList;
  } catch (error) {
    console.error("Error loading computers:", error);
    return null;
  }
}

export async function changePassword(data: any) {
  try {
    console.log(data)
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access")?.value;    

    const response = await fetch(CHANGE_USER_PASSWORD_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data)
    });
    
    console.log(response)
    
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    

    const resData = await response.json();
    if(response.status === 200 ) {
      return resData.detail
    } else if (response.status === 400 ) {
      return resData.old_password[0] || resData.new_password[0]
    }
  } catch (error) {
    console.error("Error changing password:", error);
    return null;
  }
}
