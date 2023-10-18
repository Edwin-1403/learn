import React, { useEffect, useState } from 'react'; // Import useState
import { Avatar, IconButton } from '@mui/material';
import './Sidebar.css';
import { useStateValue } from '../ContextApi/StateProvider';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material';
import SidebarChat from '../SidebarChat/SidebarChat';
import axios from 'axios';

const Sidebar = () => {
    const [{ user }] = useStateValue();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/all/rooms").then((Response) => {
            setRooms(Response.data);
        });
    }, []);
console.log(rooms);
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
                    <input type="text" placeholder='Search or start a new chat' />
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat />
                {rooms.map((room) => (
                    <SidebarChat key={room._id} id={room._id} name={room.name} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
