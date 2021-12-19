import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Picker } from "emoji-mart";

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  library.add(fas);

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setMessage(message + emoji);
  };
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
    <>
      {" "}
      {showEmojis && (
        <div className="fixed w-auto top-20  sm:top-auto sm:bottom-2 left-5 z-50 ">
          <Picker onSelect={addEmoji} />
        </div>
      )}
      <form className="flex fixed bottom-10 bg-black opacity-80  w-11/12 pl-5 pr-2 py-2 max-w-2xl shadow-xl border-4 border-blue-400 z-50 rounded-full ">
        <div
          className={`w-8 h-full sm:w-10 m-auto text-white ${
            showEmojis ? "opacity-100" : "opacity-50"
          }`}
        >
          <button
            type="button"
            className={`w-full p-1 outline-none bg-transparent`}
            onClick={() => setShowEmojis(!showEmojis)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
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
    </>
  );
};

export default SendMessage;
