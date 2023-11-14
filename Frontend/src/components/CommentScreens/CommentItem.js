import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineWavingHand, MdWavingHand } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CommentItem = ({ comment, activeUser }) => {
    // Rest of the code will go in the following parts...
   // Continuing from Part 1...
   const navigate = useNavigate();
   const [likeCount, setLikeCount] = useState(comment.likeCount);
   const [likeStatus, setLikeStatus] = useState(false);

   useEffect(() => {
       // The function and its contents...
   }, []);