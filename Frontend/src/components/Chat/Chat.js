import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { useStateValue } from "../ContextApi/StateProvider";
import axios from "axios";
import { useParams } from "react-router-dom";


const Chat = () => {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }] = useStateValue();
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      axios.get(`http://localhost:5000/rooms/${roomId}`).then((response) => {
        setRoomName(response.data.name);
        setUpdatedAt(response.data.updatedAt);
      });
      axios.get(`http://localhost:5000/messages/${roomId}`).then((response) => {
        setMessages(response.data)
        
    });
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault(); //using for unwanted refresh
    console.log(input);

    if (!input) {
      return;
    }

    await axios.post("http://localhost:5000/messages/new", {
      message: input,
      name: user.displayName,
      timestamp: new Date(),
      uid: user.uid,
      roomId: roomId,
    });
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>{roomName ? roomName : "Welcome to WhatsApp"}</h3>
          <p>
            {updatedAt
              ? `Last seen at ${new Date(updatedAt).toString().slice(0, 25)}`
              : "Click on any Group"}
          </p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        {
          messages.map((message,index)=>(
            <p className={`chat_message ${message.uid === user.uid && "chat_receiver"}`} key={index}>
          <span className="chat_name">{message.name} </span>
          {message.message}
          <span className="chat_timestamp">
            {new Date(message.timestamp).toString().slice(0, 25)}
          </span>
        </p>
          ))
        }

      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
