import React from "react";
import { useMoralis } from "react-moralis";

function ChangeUsernameComponent() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const setUsername = () => {
    const username = prompt(
      `Enter your username currently : ${user.getUsername()}`
    );

    if (!username) return;
    setUserData({ username });
  };
  return (
    <div className="text-sm absolute top-5 right-5">
      <button className="hover:text-pink-700" onClick={setUsername}>
        Change your Username{" "}
      </button>{" "}
    </div>
  );
}

export default ChangeUsernameComponent;
