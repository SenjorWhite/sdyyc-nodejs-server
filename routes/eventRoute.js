const eventManager = require("../services/EventManager");
const identifyAuth = require("../middleware/identifyAuth");
const checkCredits = require("../middleware/checkCredits");

module.exports = app => {
    app.get("/api/events", (req, res) => {
        let events = eventManager.getEvents();
        res.json(events);
        console.log("Request for events at %s", Date.now())
    });

    app.post("/api/event/create", identifyAuth, checkCredits(500), async (req, res) => {
        req.user.credits -= 500;
        let eventStatus = req.body;
        let profile = {
            title: eventStatus.title,
            body: eventStatus.body,
            attendees: eventStatus.attendees,
            _user: req.user.id,
            createDate: Date.now(),
            eventDate: eventStatus.eventDate || Date.now()
        }

        let event = await eventManager.createEvent(req.body);
        let user = await req.user.save();
        res.send(user)
    })
}