import clsx from "clsx";
import { Loader2 } from "lucide-react";
import { useUsersData } from "../hooks/useUsersData";
import UserInfo from "./UserInfo";

const UsersList = () => {
  const { isLoading, users, isValidating } = useUsersData();

  return (
    <>
      <h1
        className="
        scroll-m-20
        text-3xl
        font-extrabold
        tracking-tight"
      >
        Users
      </h1>
      <div
        className={clsx(
          "w-[760px] bg-customgray border-[0.5px] min-h-[50%] border-slate-500/[.3] rounded divide-y divide-slate-500/[.3]",
          isLoading && "flex justify-center items-center"
        )}
      >
        {isLoading ? (
          <Loader2 className="h-12 w-12 animate-spin" />
        ) : (
          users?.map((user) => <UserInfo key={user.id} {...user} />)
        )}
      </div>
      <h3>{isValidating ? "Revalidate" : null}</h3>
    </>
  );
};

export default UsersList;
