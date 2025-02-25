// UserPage.jsx
import { useState } from "react";
import UserProfile from "./UserProfile";

const UserPage = () => {
  const [user, setUser] = useState({
    name: "zhangsan",
    age: 30,
  });

  const handleAgeChange = () => {
    setUser((user) => ({
      ...user,
      age: user.age + 1,
    }));
  };

  return (
    <>
      <h1>User Page</h1>
      <UserProfile
        name={user.name}
        age={user.age}
        onAgeChange={handleAgeChange}
      />
    </>
  );
};

export default UserPage;
