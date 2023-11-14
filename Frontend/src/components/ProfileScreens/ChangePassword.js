import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../Css/ChangePassword.css'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

const ChangePassword = () => {
    // Rest of the code will be added in the following commits...
}
    // Continuing from Part 1...
    const [isRevealPass1, setIsRevealPass1] = useState(false);
    const [isRevealPass2, setIsRevealPass2] = useState(false);
    const [isRevealPass3, setIsRevealPass3] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // Rest of the code in subsequent commits...
