import React from 'react'
import { AuthButton } from '../components/Auth-button'
import {Link } from "react-router-dom"

const MainPage = () => {
    return (
        <div className="Header">
            <AuthButton />
            <ul>
                <li>
                <Link to="/">Public Page</Link>
                </li>
                <li>
                <Link to="/dashboard">Go to my Dashboard!</Link>
                </li>
            </ul>
        </div>
    );
}
  
export default MainPage;