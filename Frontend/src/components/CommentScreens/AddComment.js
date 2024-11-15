import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import StarRating from './StarRating';
import { BsShieldCheck, BsCheckAll } from 'react-icons/bs'
import { IoAdd } from 'react-icons/io5'
import Loader from "../GeneralScreens/Loader";
import { useNavigate } from 'react-router-dom';
import '../../Css/AddComment.css'

const AddComment = ({ setSidebarShowStatus, slug, getStoryComments, activeUser, count }) => {

    const navigate = useNavigate();
    const textareaRef = useRef(null)
    const [star, setStar] = useState(0);
    const [starCurrentVal, setStarCurrentVal] = useState(0);
    const [content, setContent] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [showStatus, setShowStatus] = useState(true)
    const [loading, setLoading] = useState(true)

    const [storyUser, setStoryUser] = useState("")

    useEffect(() => {

        const getDetailStory = async () => {
            setLoading(true)

            try {
                setLoading(false)
                const { data } = await axios.post(`/api/story/${slug}`, { activeUser })
                setStoryUser(data.data.author.username)

            }
            catch (error) {
                setStoryUser("")
                navigate("/not-found")
            }

        }
        getDetailStory();

    }, [slug, setLoading])


    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            await axios.post(`/api/comment/${slug}/addComment`, { content, star }, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            })

            setSuccess('Add Comment successfully ')
            setTimeout(() => {
                setSuccess('')
            }, 2700)

            setTimeout(() => {
                document.querySelector(".commentCount").textContent = count + 1
            }, 650);

            clearInputs()

            getStoryComments()

        }
        catch (error) {

            if (error.response.data.error === 'Jwt expired') {
                console.log("token expired ...")
                navigate('/')
            }
            setError(error.response.data.error)
            setTimeout(() => {
                setError('')
            }, 4500)
        }
    }

    const clearInputs = () => {
        setStar(0)
        setStarCurrentVal(0)
        setContent('')
        textareaRef.current.textContent = ''

    }


    return (

        <>
            <div className="sidebar-top-block">

                <h3>{activeUser.username !== storyUser ? "Groom Appointment" : "Doctor Appointment"} ( <span className='sidebar-commentCount'>{count}
                </span> )   </h3>

                <div>

                    < BsShieldCheck />
                    <IoAdd onClick={() => setSidebarShowStatus(false)} className='ıoAddIcon' />
                </div>
            </div>

            {error && <div className="alert-error-message">{error}</div>}


            {activeUser.username &&

                <form className='addComment-form' onSubmit={handleSubmit}>


                    {success && <div className="alert-success-message">
                        <BsCheckAll />
                        {success}</div>}


                    <div className={showStatus ? 'activeuser-info ' : 'activeuser-info hidden '}>
                        <img src={`/userPhotos/${activeUser.photo}`} alt={activeUser.username} />
                        <span className='username'>{activeUser.username}  </span>
                    </div>

                    <div className="textarea-wrapper">
                        <div ref={textareaRef}
                            contentEditable
                            placeholder={activeUser.username === storyUser ? 'Leave your dog status exactly for doctor appointment' : 'Leave meeting schedule about groom appointment'} id="comment"
                            name="content"
                            onKeyUp={(e) => {
                                setContent(e.target.innerHTML)
                            }
                            }

                            onFocus={() => setShowStatus(true)}
                        ></div>
                    </div>

                    <div className={showStatus ? 'form-bottom-block' : 'form-bottom-block hidden'} >
                        {activeUser.username === storyUser ?
                            <div>Dog Status: <StarRating setStar={setStar} setStarCurrentVal={setStarCurrentVal} starCurrentVal={starCurrentVal} /> </div> : <div></div>}

                        <div className="formBtn-wrapper">
                            <button type='button'
                                className='cancel-Btn'
                                onClick={() => setShowStatus(!showStatus)}
                            >Cancel </button>
                            <button type='submit' className={content === '' ? 'respond-Btn disable' : 'respond-Btn'}
                                disabled={content === '' ? true : false}
                            >Send </button>

                        </div>
                    </div>

                </form>


            }
        </>

    )
}

export default AddComment