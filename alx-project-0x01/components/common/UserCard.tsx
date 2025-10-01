import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address, company }) => {
  return (
    <div className="border rounded-lg shadow p-4 bg-white">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>

      <div className="mt-2">
        <h3 className="font-semibold text-gray-700">Address</h3>
        <p className="text-gray-600">
          {address?.suite}, {address?.street}, {address?.city}
        </p>
      </div>

      <div className="mt-2">
        <h3 className="font-semibold text-gray-700">Company</h3>
        <p className="text-gray-600 italic">"{company?.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;

