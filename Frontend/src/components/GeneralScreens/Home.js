import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SkeletonStory from "../Skeletons/SkeletonStory";
import CardStory from "../StoryScreens/CardStory";
import NoStories from "../StoryScreens/NoStories";
import Pagination from "./Pagination";
import "../../Css/Home.css";
