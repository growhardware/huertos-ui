import React from 'react'
import { AuthButton } from '../components/Auth-button'
import {Link } from "react-router-dom"

const MainPage = () => {
    return (
        <div className="App-header">
            <AuthButton />
            <ul>
                <li>
                <Link to="/public">Public Page</Link>
                </li>
                <li>
                <Link to="/dashboard">Go to my Dashboard!</Link>
                </li>
            </ul>
        </div>
    );
}
  
export default MainPage;