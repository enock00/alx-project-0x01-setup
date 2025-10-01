import Button from "@/components/common/Button";

const UsersPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <Button title="Add User" onClick={() => alert("Add user clicked!")} />
    </div>
  );
};

export default UsersPage;
