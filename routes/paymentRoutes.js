const keys = require("../configs/keys");
const identifyAuth = require("../middleware/identifyAuth");
const stripe = require("stripe")(keys.Stripe.SecretKey);

module.exports = app => {
    app.post("/api/stripe", identifyAuth, async (req, res) => {
        let charge = await stripe.charges.create({
            amount: 10000,
            currency: "CAD",
            description: "Donate Senjor the Poor",
            source: req.body.id
        });

        req.user.credits += 10000;
        let user = await req.user.save();

        console.log(user);
        res.send(user);
    });
}