import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SkeletonStory from "../Skeletons/SkeletonStory";
import CardStory from "../StoryScreens/CardStory";
import NoStories from "../StoryScreens/NoStories";
import Pagination from "./Pagination";
import "../../Css/Home.css";
const Home = () => {
    const search = useLocation().search;
    const searchKey = new URLSearchParams(search).get('search');
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
  
    // ... (rest of the useEffect hooks and component logic)
  };

  useEffect(() => {
    // First useEffect logic here
  }, [setLoading, search, page, navigate]);
  
  useEffect(() => {
    // Second useEffect logic here
  }, [searchKey]);
  
  return (
    // JSX rendering logic here
  );
  export default Home;
  