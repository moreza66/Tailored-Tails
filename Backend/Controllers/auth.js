const asyncErrorWrapper = require("express-async-handler");
const User = require("../Models/user");
const CustomError = require("../Helpers/error/CustomError");
const { sendToken } = require("../Helpers/auth/tokenHelpers");

const register = asyncErrorWrapper(async (req, res, next) => {
    const { username, email, password } = req.body;
    
    const newUser = await User.create({ username, email, password });
    
    sendToken(newUser, 201, res);
});

module.exports = { register };
