const eventManager = require("../models/EventManager");

module.exports = app => {
    app.get("/api/events", (req, res) => {
        let events = eventManager.getEvents();
        res.json(events);
        console.log("Request for events at %s", Date.now())
    });
}