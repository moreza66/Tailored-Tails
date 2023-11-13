import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import StarRating from './StarRating';
import { BsShieldCheck, BsCheckAll } from 'react-icons/bs';
import { IoAdd } from 'react-icons/io5';
import Loader from "../GeneralScreens/Loader";
import { useNavigate } from 'react-router-dom';
import '../../Css/AddComment.css';
const AddComment = ({ setSidebarShowStatus, slug, getStoryComments, activeUser, count }) => {
    const navigate = useNavigate();
    const textareaRef = useRef(null);
    const [star, setStar] = useState(0);
    const [starCurrentVal, setStarCurrentVal] = useState(0);
    const [content, setContent] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [showStatus, setShowStatus] = useState(true);
    const [loading, setLoading] = useState(true);
    const [storyUser, setStoryUser] = useState("");

    useEffect(() => {
        // useEffect content here
    }, [slug, setLoading]);
    const handleSubmit = async (e) => {
        // handleSubmit content here
    };
    return (
        // JSX content here
    );
    export default AddComment;

