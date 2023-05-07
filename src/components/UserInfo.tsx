import { Fetcher, preload } from "swr";
import { mutate } from "swr";

type UserInfoProps = {
  id: number;
  email: string;
  name: string;
  pictureUrl: string;
  role: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  pictureUrl: string;
  role: string;
  isDeleted: boolean;
};

const UserInfo = ({ id, email, name, pictureUrl }: UserInfoProps) => {
  const fetcher: Fetcher<User> = async (url: string) => {
    return fetch(url).then((res) => res.json());
  };
  return (
    <a
      href={`/users/${id}`}
      className="flex items-center h-28 bg-customcolor w-full p-8 hover:bg-gray-400/20 cursor-pointer"
      onMouseEnter={() => {
        const data = preload("http://localhost:3000/users/" + id, fetcher);
        mutate("http://localhost:3000/users/" + id, data, true);
      }}
    >
      <div className="flex gap-4 items-center">
        <img className="h-12 w-12 rounded-full" src={pictureUrl} />
        <div className="flex flex-col">
          <h3 className="text-white font-bold">{name}</h3>
          <h4 className="text-slate-400">{email}</h4>
        </div>
      </div>
    </a>
  );
};

export default UserInfo;
