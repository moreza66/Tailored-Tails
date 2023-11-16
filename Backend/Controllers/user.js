// middleware.js
const asyncErrorWrapper = require("express-async-handler");
const User = require("../Models/user");
const Story = require("../Models/story");
const CustomError = require("../Helpers/error/CustomError");
const { comparePassword, validateUserInput } = require("../Helpers/input/inputHelpers");

const profile = asyncErrorWrapper(async (req, res, next) => {
  
});

const editProfile = asyncErrorWrapper(async (req, res, next) => {
   
});

const changePassword = asyncErrorWrapper(async (req, res, next) => {
    
});

const addStoryToReadList = asyncErrorWrapper(async (req, res, next) => {

});

const readListPage = asyncErrorWrapper(async (req, res, next) => {

});

module.exports = {
    profile,
    editProfile,
    changePassword,
    addStoryToReadList,
    readListPage
};
