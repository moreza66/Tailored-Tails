import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import "../../Css/DetailStory.css";
import Loader from '../GeneralScreens/Loader';
import { FaRegHeart, FaHeart, FaRegComment } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit, FiArrowLeft } from 'react-icons/fi';
import { BsBookmarkPlus, BsThreeDots, BsBookmarkFill } from 'react-icons/bs';
import CommentSidebar from '../CommentScreens/CommentSidebar';

const DetailStory = () => {
    // Further code will be added in subsequent commits...
}
    // Continuing from Commit 1...
    const [likeStatus, setLikeStatus] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [activeUser, setActiveUser] = useState({});
    const [story, setStory] = useState({});
    // ... other state declarations ...
    // Further code will be added in subsequent commits...
        // Continuing from Commit 2...
        const slug = useParams().slug;
        const navigate = useNavigate();
    
        useEffect(() => {
            // Logic for fetching story details...
            // Further code will be added in subsequent commits...
        }, [slug, setLoading]);
        // Continuing from Commit 3...
        const handleLike = async () => { /* ... */ };
        const handleDelete = async () => { /* ... */ };
        const addStoryToReadList = async () => { /* ... */ };
        // Further code will be added in subsequent commits...
          // Continuing from Commit 4...
    const editDate = (createdAt) => { /* ... */ };
    // Further code will be added in subsequent commits...
    
