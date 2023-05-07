import { useParams } from "react-router-dom";
import { useUserData } from "../hooks/useUserData";
import { Loader2 } from "lucide-react";

const UserPage = () => {
  const { userId } = useParams();
  const { user, isLoading } = useUserData(userId!);

  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      <h1
        className="
      scroll-m-20
      text-3xl
      font-extrabold
      tracking-tight"
      >
        User Page
      </h1>
      {isLoading ? (
        <Loader2 className="h-12 w-12 animate-spin" />
      ) : (
        <div className="flex items-center justify-center bg-customcolor w-full p-8">
          <div className="flex gap-4 items-center">
            <img className="h-24 w-24 rounded-full" src={user?.pictureUrl} />
            <div className="flex flex-col">
              <h3 className="text-white font-bold">{user?.name}</h3>
              <h4 className="text-slate-400">{user?.email}</h4>
            </div>
            <button className="bg-purple-200 p-2 text-purple-400 font-semibold rounded">
              {user?.role === "admin" ? "Admin" : "User"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
