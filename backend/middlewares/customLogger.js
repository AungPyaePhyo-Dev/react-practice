
function customLogger(req, res, next) {
    console.log("Log from custom log", req.url);
    next();
}
module.exports = customLogger;