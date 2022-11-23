import React from "react";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

let socket;

const Chat = () => {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    getAccessTokenSilently().then((accessToken) => {
      socket = io.connect("http://localhost:3001", {
        query: { accessToken },
      });
      socket.on("receive_message", (data) => {
        setMessageReceived(data.message);
      });
      socket.on("connect_error", (error) => {
        console.error(error);
      });
    });
  });

  return (
    <div>
      <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}> Join Room</button>
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Message</button>
      <h1> Message: </h1>
      {messageReceived}
    </div>
  );
};

export default Chat;
