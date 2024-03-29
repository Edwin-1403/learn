import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import { useStateValue } from './components/ContextApi/StateProvider';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  const [{ user }] = useStateValue();

  return (
    <div className='app'>
      {!user ?
        <Login /> :
        <div className="app_body">
          <Router>
          <Sidebar />
            <Routes>
              <Route path='/' element={<Chat/>} />
              <Route path='/rooms/:roomId' element={<Chat/>} /> {/*:means dynamic value*/}
            </Routes>
          </Router>
        </div>
      }
    </div>
  )
}

export default App