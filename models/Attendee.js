const mongoose = require("mongoose");
const { Schema } = mongoose;

const attendeeSchema = new Schema({
    _user: Schema.Types.ObjectId,
    rsvp: { type: Boolean, default: null }
});

module.exports = attendeeSchema;