var mongoose = require("mongoose");


const tiktokSchema = new mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    description: String,
    shares: String,
});

module.exports = mongoose.model('tiktokVideos', tiktokSchema);