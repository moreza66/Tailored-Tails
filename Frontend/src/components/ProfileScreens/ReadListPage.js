import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loader from "../GeneralScreens/Loader";
import { useNavigate, Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { AuthContext } from '../../Context/AuthContext'
import { AiFillLock } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import ReadListStoryItem from '../StoryScreens/ReadListStoryItem';

import '../../Css/ReadListPage.css'
const ReadListPage = () => {
    const navigate = useNavigate();
    const [readList, setReadList] = useState([])
    const [loading, setLoading] = useState(false)
    const { config, activeUser } = useContext(AuthContext)

    useEffect(() => {
        const getUserReadingList = async () => {
            setLoading(true)

            try {
                const { data } = await (await axios.get(`/user/readList`, config)).data
                setReadList(data)
                setLoading(false)
            }
            catch (error) {
                navigate("/")
            }
        }
        getUserReadingList()


    }, [])
    const editDate = (createdAt) => {

        const d = new Date(createdAt);
        var datestring = d.toLocaleString('eng', { month: 'long' }).substring(0, 3) + "  " + d.getDate()
        return datestring
    }

