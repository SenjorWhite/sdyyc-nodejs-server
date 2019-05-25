require("../models/Event");
const mongoose = require("mongoose");
const Event = mongoose.model("events");

module.exports = {
    getEvents: async function () {
        let events = await Event.find({}, "_id title body eventDate");
        
        events = events.map((event) => {
            return {
                id: event._id,
                title: event.title,
                content: event.body,
                eventDate: event.eventDate
            }
        });

        console.log(events);
        return events;
    },

    createEvent: async function (profile) {
        let event = new Event({
            title: profile.title,
            body: profile.body,
            attendees: profile.attendees.map(attendee => ({ _user: attendee })),
            _user: profile.id,
            createDate: Date.now(),
            eventDate: profile.eventDate
        })

        return await event.save();
    }
}