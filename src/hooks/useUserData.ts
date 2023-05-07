import useSWR, { Fetcher } from "swr";

type User = {
  id: number;
  name: string;
  email: string;
  pictureUrl: string;
  role: string;
  isDeleted: boolean;
};

export const useUserData = (userId: string) => {
  const fetcher: Fetcher<User> = async (url: string) => {
    return fetch(url).then((res) => res.json());
  };
  const { data, error, isLoading, isValidating } = useSWR(
    `http://localhost:3000/users/${userId}`,
    fetcher
  );
  return {
    user: data,
    isLoading,
    isError: error,
    isValidating,
  };
};
