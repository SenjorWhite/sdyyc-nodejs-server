module.exports = {
    "Google": {
        "ClientID": process.env.GOOGLE_CLIENT_ID,
        "ClientSecret": process.env.GOOGLE_CLIENT_SECRET,
        "CallbackURL": process.env.GOOGLE_CALLBACK_URL
    },
    "Mongo": {
        "Uri": process.env.MONGO_URI
    },
    "Stripe": {
        "PublishableKey": process.env.STRIPE_PUBLISHABLE_KEY,
        "SecretKey": process.env.STRIPE_SECRET_KEY
    },
    "Cookie": {
        "Keys": [
            process.env.COOKIE_KEY
        ]
    }
}