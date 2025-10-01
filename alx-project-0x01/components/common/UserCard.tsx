import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-blue-600">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-gray-800 mt-2">{user.email}</p>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Address</h3>
        <p className="text-gray-600">
          {user.address.suite}, {user.address.street}, {user.address.city}
        </p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Company</h3>
        <p className="text-gray-600">{user.company.name}</p>
        <p className="italic text-gray-500">"{user.company.catchPhrase}"</p>
      </div>

      <div className="mt-4">
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          🌐 {user.website}
        </a>
      </div>
    </div>
  );
};

export default UserCard;
