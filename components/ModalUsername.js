import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ModalUsername({ isOpen, onCloseModal }) {
  library.add(fas);
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const [username, setUsername] = useState("");
  const saveUsername = (e) => {
    e.preventDefault();

    if (!username) return;
    setUserData({ username });
    setUsername("");
    onCloseModal(false);
  };
  return (
    <div className="bg-black/50 fixed top-0 left-0 bottom-0 right w-full z-50 flex justify-center items-center ">
      <form className="w-11/12 md:w-2/6 relative border-2 border-blue-500 p-8 rounded-md bg-gradient-to-b from-black/90 to-black/60 shadow-xl  ">
        <button
          type="button"
          className="text-pink-300 absolute top-2 right-2 hover:text-pink-700"
          onClick={() => onCloseModal(false)}
        >
          <FontAwesomeIcon className="mr-1" icon={["fas", "times"]} />
        </button>
        <label
          className="text-pink-500 py-8 sm:text-[22px] font-semibold"
          htmlFor="username"
        >
          <FontAwesomeIcon className="mr-1" icon={["fas", "user"]} /> Change
          your username{" "}
        </label>
        <div className=" my-5 py-3 pl-3 rounded-xl bg-slate-600/40">
          <input
            className="truncate bg-transparent outline-none border-0 w-full text-pink-500"
            type="text"
            name="username"
            id="username"
            value={username}
            placeholder={`Your current username : ${user.getUsername()}`}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="pt-4 text-center">
          <button
            type="submit"
            className="py-2 px-8 rounded-full uppercase font-semibold messages"
            onClick={saveUsername}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalUsername;
