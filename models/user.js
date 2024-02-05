const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.objectId,
    userName: String,
    pwd: String,
    mobile: Number,
    email: String,
    location: String
});

module.exports = mongoose.model("User", userSchema);