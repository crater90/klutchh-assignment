const jwt = require("jsonwebtoken");

exports.loginCheck = (req, res, next) => {
    try {
        let token = req.headers.token;
        token = token.replace("Bearer ", "");
        decode = jwt.verify(token, process.env.JWT_SECRET);
        req.userDetails = decode;
        next();
    } catch (err) {
        res.json({
            error: "You must be logged in",
        });
    }
};

exports.isAuth = (req, res, next) => {
    let { loggedInUserId } = req.body;
    if (
        !loggedInUserId ||
        !req.userDetails._id ||
        loggedInUserId != req.userDetails._id
    ) {
        res.status(403).json({ error: "You are not authenticate" });
    }
    next();
};