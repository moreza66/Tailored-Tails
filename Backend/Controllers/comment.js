const asyncErrorWrapper = require("express-async-handler");
const Story = require("../Models/story");
const Comment = require("../Models/comment");

const addNewCommentToStory = asyncErrorWrapper(async (req, res, next) => {
    const asyncErrorWrapper = require("express-async-handler");
    const Story = require("../Models/story");
    const Comment = require("../Models/comment");
    
    const getAllCommentByStory = asyncErrorWrapper(async (req, res, next) => {
        // ... existing code for getAllCommentByStory
    });
    
    module.exports = {
        getAllCommentByStory,
    };
    const asyncErrorWrapper = require("express-async-handler");
const Comment = require("../Models/comment");

const commentLike = asyncErrorWrapper(async (req, res, next) => {
    // ... existing code for commentLike
});

module.exports = {
    commentLike,
};
    
    
});

module.exports = { addNewCommentToStory };