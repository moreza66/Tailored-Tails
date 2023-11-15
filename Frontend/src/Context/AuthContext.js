import React, { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

const AuthContextProvider = props => {
    // Additional code will be added in subsequent commits...
}
    // Continuing from Commit 1...
    const [activeUser, setActiveUser] = useState({});
    const [config, setConfig] = useState({
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
    });
    // Further code will be added in subsequent commits...

