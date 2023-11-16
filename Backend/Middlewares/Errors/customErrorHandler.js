// errorHandler.js
const AppError = require("../../../error/AppError");

const handleAppError = (err, req, res, next) => {
    if (err.code == 11000) {
        err = new AppError("Duplicate Field Value Enter", 404);
    }

    if (err.name === 'SyntaxError') {
        err = new AppError('Unexpected Syntax', 400);
    }

    if (err.name === 'ValidationError') {
        err = new AppError(err.message, 400);
    }

    if (err.name === "CastError") {
        err = new AppError("Please provide a valid id", 400);
    }

    if (err.name === "TokenExpiredError") {
        err = new AppError("Jwt expired", 401);
    }

    if (err.name === "JsonWebTokenError") {
        err = new AppError("Jwt malformed", 401);
    }

    console.log("Custom Error Handler => ", err.name, err.message, err.statusCode);

    return res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || "Server Error",
    });
};

module.exports = handleAppError;
