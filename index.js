const eventManager = require("./models/EventManager");
const path = require("path");
const express = require("express");
const server = express();

const port = 3939;

server.use(express.static(path.resolve(__dirname, "./public")));

server.get("/api/events", (req, res) => {
    let events = eventManager.getEvents();
    res.json(events);
    console.log("Request for events at %s", Date.now())
});

server.listen(port, () => {
    console.log("Server is listening on port: %s", port);
});