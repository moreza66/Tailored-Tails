import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import Loader from '../GeneralScreens/Loader';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthContext";
import { AiOutlineUpload } from 'react-icons/ai';
import '../../Css/EditStory.css';

const EditStory = () => {
    // Further code will be added in subsequent commits...
}
    // Continuing from Commit 1...
    const { config } = useContext(AuthContext);
    const slug = useParams().slug;
    const imageEl = useRef(null);
    const [loading, setLoading] = useState(true);
    const [story, setStory] = useState({});
    // ... other state and ref declarations ...
    // Further code will be added in subsequent commits...
