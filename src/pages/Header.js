import React from 'react'
import { AuthButton } from '../components/Auth-button'
import {Link } from "react-router-dom"

const MainPage = () => {
    return (
        <div className="Header">
            <AuthButton />
        </div>
    );
}
  
export default MainPage;