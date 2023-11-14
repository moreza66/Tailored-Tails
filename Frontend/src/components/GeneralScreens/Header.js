import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import SearchForm from './SearchForm';
import '../../Css/Header.css'
import { RiPencilFill } from 'react-icons/ri'
import { FaUserEdit } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { BsBookmarks } from 'react-icons/bs'
import SkeletonElement from '../Skeletons/SkeletonElement';
import { AuthContext } from '../../Context/AuthContext';

const Header = () => {
    // Remaining parts will be committed in subsequent commits...
}

export default Header;

    // Continuing from Part 1...
    const bool = localStorage.getItem("authToken") ? true : false
    const [auth, setAuth] = useState(bool)
    const { activeUser } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    // Rest of the code in subsequent commits...

        // Continuing from Part 2...
        const navigate = useNavigate()

        useEffect(() => {
            // useEffect implementation...
        }, [bool])
    
        const handleLogout = () => {
            // Logout function implementation...
        };
        // Remaining JSX in the next commit...