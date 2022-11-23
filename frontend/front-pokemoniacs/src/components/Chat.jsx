import React from "react";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

let socket;

const Chat = () => {
  const [room, setRoom] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { newMessage, room });
  };

  useEffect(() => {
    getAccessTokenSilently().then((accessToken) => {
      socket = io.connect("http://localhost:3001", {
        query: { accessToken },
      });

      socket.on("receive_message", (data) => {
        setMessages([...messages, data]);
      });

      socket.on("connect_error", (error) => {
        console.error(error);
      });
    });
  }, []);

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
          setNewMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Messages</button>
      <h1> Messages: </h1>
      {messages.map((m) => (
        <h1>{m.message}</h1>
      ))}
    </div>
  );
};

export default Chat;
