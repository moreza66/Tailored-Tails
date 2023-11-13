import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import StarRating from './StarRating';
import { BsShieldCheck, BsCheckAll } from 'react-icons/bs';
import { IoAdd } from 'react-icons/io5';
import Loader from "../GeneralScreens/Loader";
import { useNavigate } from 'react-router-dom';
import '../../Css/AddComment.css';
