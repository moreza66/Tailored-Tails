const asyncErrorWrapper = require("express-async-handler");
const User = require("../Models/user");
const CustomError = require("../Helpers/error/CustomError");
const { sendToken } = require("../Helpers/auth/tokenHelpers");

const register = asyncErrorWrapper(async (req, res, next) => {
    const { username, email, password } = req.body;
    
    const newUser = await User.create({ username, email, password });
    
    sendToken(newUser, 201, res);
});
const asyncErrorWrapper = require("express-async-handler");
const User = require("../Models/user");
const CustomError = require("../Helpers/error/CustomError");
const { sendToken } = require("../Helpers/auth/tokenHelpers");
const { validateUserInput, comparePassword } = require("../Helpers/input/inputHelpers");

const login = asyncErrorWrapper(async (req, res, next) => {
    const { email, password } = req.body;

    if (!validateUserInput(email, password)) {
        return next(new CustomError("Please check your inputs", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new CustomError("Invalid credentials", 404));
    }

    if (!comparePassword(password, user.password)) {
        return next(new CustomError("Please check your credentials", 404));
    }

    sendToken(user, 200, res);
});

module.exports = { login };


module.exports = { register };
