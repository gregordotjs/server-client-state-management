import { ReqResResponse, User } from "../interfaces";
import { BASE_API } from "./config";

// The async function to fetch users from the ReqRes API
export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${BASE_API}/users`);
    const data: ReqResResponse = await response.json();

    return data.data; // Return the list of users
  } catch (error) {
    console.error("Error fetching users:", error);

    throw error; // Rethrow the error for further handling if necessary
  }
}
