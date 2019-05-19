const mongoose = require("mongoose");
const { Schema } = mongoose;
const attendeeSchema = require("./Attendee");

const eventSchema = new Schema({
    title: String,
    body: String,
    attendees: [attendeeSchema],
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    createDate: Date,
    eventDate: Date
});

mongoose.model("events", eventSchema);