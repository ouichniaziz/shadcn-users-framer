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

export const useUsersData = () => {
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: async (): Promise<User[]> => {
      const res = await fetch("http://localhost:3000/users");
      await delay(1000);
      return res.json();
    },
  });
  return usersQuery;
};
