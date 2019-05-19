module.exports = (minCredits) => {
    return checkCredits = function (req, res, next) {
        let user = req.user;
        if (user.credits >= minCredits) {
            next();
        } else {
            res.status(403).send({ Error: "Not enough credits." });
        }
    }
}