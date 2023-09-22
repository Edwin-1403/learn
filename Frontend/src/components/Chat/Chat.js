import React, { useEffect, useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material';

const Chat = () => {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className='chat'>
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>React Developers</h3>
          <p>Last seen at {new Date().toString().slice(0, 25)}</p>
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
        <p className='chat_message'>
          <span className='chat_name'>Edwin Cyril </span>
          Hello from Edwin
          <span className='chat_timestamp'>
            {new Date().toString().slice(0, 25)}
          </span>
        </p>

        <p className='chat_message chat_receiver'>
          <span className='chat_name'>John </span>
          Hello from Mate
          <span className='chat_timestamp'>
            {new Date().toString().slice(0, 25)}
          </span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input type="text" placeholder='Type a message' />
          <button type='submit'>Send a message</button>
        </form>

      </div>
    </div>
  )
};

export default Chat
