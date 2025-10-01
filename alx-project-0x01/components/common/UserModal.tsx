import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<Partial<UserData>>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Nested updates for address & company
    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address!, [key]: value },
      }));
    } else if (name.startsWith("company.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        company: { ...prev.company!, [key]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const newUser: UserData = {
      id: Date.now(), // temporary id
      name: formData.name || "",
      username: formData.username || "",
      email: formData.email || "",
      address: formData.address as UserData["address"],
      phone: formData.phone || "",
      website: formData.website || "",
      company: formData.company as UserData["company"],
    };

    onSave(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        <input
          name="name"
          placeholder="Full Name"
          className="border w-full mb-2 p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="username"
          placeholder="Username"
          className="border w-full mb-2 p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          className="border w-full mb-2 p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="address.street"
          placeholder="Street"
          className="border w-full mb-2 p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="address.city"
          placeholder="City"
          className="border w-full mb-2 p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="company.name"
          placeholder="Company Name"
          className="border w-full mb-2 p-2 rounded"
          onChange={handleChange}
        />

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;

