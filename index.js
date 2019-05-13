const eventManager = require("./models/EventManager");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./configs/keys");
const port = 3939;

require("./models/User");
require("./services/passport");

mongoose.connect(keys.Mongo.Uri, { useNewUrlParser: true });

const app = express();

app.use(
    cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: keys.Cookie.Keys
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/api/events", (req, res) => {
    let events = eventManager.getEvents();
    res.json(events);
    console.log("Request for events at %s", Date.now())
});

require("./routes/authRoutes")(app);

app.listen(port, () => {
    console.log("Server is listening on port: %s", port);
});