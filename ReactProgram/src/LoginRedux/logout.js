import React from 'react'
import "./css/logout.css"
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './Redux/userSlice';

export default function Logout() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout())
  }
   return (
    <div className='logout'>
        <h1>
            Welcome <span className='user__name'>{user.name}</span>
        </h1>
        <button className='logout__button' onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  )
}
