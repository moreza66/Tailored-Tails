const asyncErrorWrapper = require("express-async-handler");
const Story = require("../Models/story");
const Comment = require("../Models/comment");

const addNewCommentToStory = asyncErrorWrapper(async (req, res, next) => {
    // ... (existing code for addNewCommentToStory)
});

module.exports = { addNewCommentToStory };