import React, { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import Message from "./Message";

//Only show from the last 15 minutes
const MINS_DURATION = 24 * 60;

function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    { live: true }
  );

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />{" "}
      </div>{" "}
      <div className="p-4 space-y-10">
        {" "}
        {/*Each Message */}
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}{" "}
      </div>{" "}
      <div className="flex justify-center">
        {" "}
        {/*Send Message*/} <SendMessage endOfMessagesRef={endOfMessagesRef} />{" "}
      </div>
      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p> You 're up to date {user.getUsername()} 🤩!</p>{" "}
      </div>{" "}
    </div>
  );
}

export default Messages;
