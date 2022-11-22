import "./App.css";
import SearchForm from "./components/SeachForm";
import io from "socket.io-client";
import LoginButton from "./components/authorization/LoginButton";
import LogoutButton from "./components/authorization/LogoutButton";
import Profile from "./components/authorization/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3002");

function App() {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  const { isAuthenticated } = useAuth0();
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <SearchForm />
      <LoginButton />
      <LogoutButton />
      <Profile />
      {isAuthenticated && <SearchForm />}
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
}

export default App;
