import axios from "axios";

type User = {
  username: string;
  password: string;
};

export async function postUser(user: User): Promise<string | Error> {
  try {
    const url = "http://localhost:3001/user";
    const response = await axios.post(url, user);

    return response.data as string;
  } catch (error) {
    return error as Error;
  }
}