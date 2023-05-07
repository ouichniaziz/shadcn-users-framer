import useSWR, { Fetcher } from "swr";
import { delay } from "../lib/utils";

type User = {
  id: number;
  name: string;
  email: string;
  pictureUrl: string;
  role: string;
  isDeleted: boolean;
};

export const useUsersData = () => {
  const fetcher: Fetcher<User[]> = async (url: string) => {
    await delay(500);
    return fetch(url).then((res) => res.json());
  };
  const { data, error, isLoading, isValidating } = useSWR(
    "http://localhost:3000/users",
    fetcher,
    { revalidateOnFocus: true }
    // refreshInterval: 1000
  );
  return {
    users: data,
    isLoading,
    isError: error,
    isValidating,
  };
};
