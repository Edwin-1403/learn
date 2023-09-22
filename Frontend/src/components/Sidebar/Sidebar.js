import { Avatar, IconButton } from '@mui/material';
import './Sidebar.css';
import React from 'react';
import { useStateValue } from '../ContextApi/StateProvider';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material';
import SidebarChat from '../SidebarChat/SidebarChat';

const Sidebar = () => {
    const [{ user }] = useStateValue();

    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <Avatar src={user.photoURL} />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder='Search or start new chat' />
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>

            {/*  <div className="chat_body">
                <p className='chat_message'>
                    <span>Edwin Cyril</span>
                    Hello from Anton
                    <span className='chat_timestamp'>
                        {new Date().toString().slice(0, 25)}
                    </span>
                </p>

                <p className='chat_message'>
                    <span>Edwin Cyril</span>
                    Hello from Anton
                    <span className='chat_timestamp'>
                        {new Date().toString().slice(0, 25)}
                    </span>
                </p>
                
    </div>*/}
        </div>


    )
}

export default Sidebar