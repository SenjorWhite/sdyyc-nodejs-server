require("../models/Event");
const mongoose = require("mongoose");
const Event = mongoose.model("events");

const events = [
    { id: 0001, title: "The 1st Meetup", content: "Welcome to the Meetup No. 1!", rsvp: "past" },
    { id: 0002, title: "The 2nd Meetup", content: "Welcome to the Meetup No. 2!", rsvp: "past" },
    { id: 0003, title: "The 3rd Meetup", content: "Welcome to the Meetup No. 3!", rsvp: "past" },
    { id: 0004, title: "The 4th Meetup", content: "Welcome to the Meetup No. 4!", rsvp: "past" },
    { id: 0005, title: "The 5th Meetup", content: "Welcome to the Meetup No. 5!", rsvp: "wait" },
    { id: 0006, title: "The 6th Meetup", content: "Welcome to the Meetup No. 6!", rsvp: "allow" }
]

module.exports = {
    getEvents: function () {
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