import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, company, website }) => {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-blue-600">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-800 mt-2">{email}</p>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Address</h3>
        <p className="text-gray-600">
          {address.suite}, {address.street}, {address.city}
        </p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Company</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="italic text-gray-500">"{company.catchPhrase}"</p>
      </div>

      <div className="mt-4">
        <a
          href={`http://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          🌐 {website}
        </a>
      </div>
    </div>
  );
};

export default UserCard;

