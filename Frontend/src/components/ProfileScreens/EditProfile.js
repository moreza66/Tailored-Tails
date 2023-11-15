import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineUpload } from 'react-icons/ai'
import Loader from "../GeneralScreens/Loader";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import '../../Css/EditProfile.css'
const EditProfile = () => {
    const { activeUser, config } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [photo, setPhoto] = useState('')
    const [previousPhoto, setPreviousPhoto] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')