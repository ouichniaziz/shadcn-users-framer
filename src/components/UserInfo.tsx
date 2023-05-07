type UserInfoProps = {
  id: number;
  email: string;
  name: string;
  pictureUrl: string;
  role: string;
};

const UserInfo = ({ id, email, name, pictureUrl }: UserInfoProps) => {
  return (
    <a
      href={`/users/${id}`}
      className="flex items-center h-28 bg-customcolor w-full p-8 hover:bg-gray-400/20 cursor-pointer"
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
