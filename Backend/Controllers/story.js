const asyncErrorWrapper = require("express-async-handler");
const Story = require("../Models/story");
const deleteImageFile = require("../Helpers/Libraries/deleteImageFile");

const addStory = asyncErrorWrapper(async (req, res, next) => {
    const { title, content } = req.body;
    var wordCount = content.trim().split(/\s+/).length;
    let readtime = Math.floor(wordCount / 200);

    try {
        const newStory = await Story.create({
            title,
            content,
            author: req.user._id,
            image: req.savedStoryImage,
            readtime
        });

        return res.status(200).json({
            success: true,
            message: "Add a story successfully!",
            data: newStory
        });
    } catch (error) {
        deleteImageFile(req);
        return next(error);
    }
});
const getAllStories = asyncErrorWrapper(async (req, res, next) => {
    // ... existing code for getAllStories
});

const detailStory = asyncErrorWrapper(async (req, res, next) => {
    // ... existing code for detailStory
});

module.exports = {
    addStory,
    getAllStories,
    detailStory,
    // other exports...
};

module.exports = {
    addStory,
    // other exports...
};
