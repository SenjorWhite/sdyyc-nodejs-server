module.exports = (req, res, next) => {
    let user = req.user;
    if(!user){
        return res.status(401).send({Error:"User should login first."});
    }

    next();
}