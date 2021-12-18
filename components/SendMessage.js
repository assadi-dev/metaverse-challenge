import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  library.add(fas);
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80  w-11/12 pl-5 pr-2 py-2 max-w-2xl shadow-xl border-4 border-blue-400 z-50 rounded-full ">
      <input
        type="text"
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5 "
        placeholder={`Enter a message ${user.getUsername()}`}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />{" "}
      <button
        type="submit"
        onClick={sendMessage}
        className={`font-bold  send-button ${message === "" && "opacity-10"}`}
      >
        <FontAwesomeIcon icon={["fas", "paper-plane"]} />
      </button>{" "}
    </form>
  );
};

export default SendMessage;
