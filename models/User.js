const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String,
    displayName: String,
    picture: String,
    email: String,
    //permission level: admin, premium, normal
    permission: { type: String, default: "normal" },
    credits: { type: Number, default: 0 }
});

mongoose.model("users", userSchema);