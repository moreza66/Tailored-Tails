import React, { useRef, useContext, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthContext } from "../../Context/AuthContext";
import { AiOutlineUpload } from 'react-icons/ai';
import { FiArrowLeft } from 'react-icons/fi';
import '../../Css/AddStory.css';

const AddStory = () => {
       
       const { config } = useContext(AuthContext);
       const imageEl = useRef(null);
       const editorEl = useRef(null);
       const [image, setImage] = useState('');
       const [title, setTitle] = useState('');
       const [content, setContent] = useState('');
       const [success, setSuccess] = useState('');
       const [error, setError] = useState('');
   
}
const clearInputs = () => {
    setTitle('');
    setContent('');
    setImage('');
    editorEl.current.editor.setData('');
    imageEl.current.value = "";
}