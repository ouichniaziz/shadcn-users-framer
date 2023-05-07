import { useQuery } from "@tanstack/react-query";
import { delay } from "../lib/utils";

type User = {
  id: number;
  name: string;
  email: string;
  pictureUrl: string;
  role: string;
  isDeleted: boolean;
};

export const useUserData = (userId: string) => {
  const userQuery = useQuery({
    queryKey: ["users", userId],
    queryFn: async (): Promise<User> => {
      const res = await fetch(`http://localhost:3000/users/${userId}`);
      await delay(1000);
      return res.json();
    },
  });
  return userQuery;
};
