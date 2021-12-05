const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({

    UserImage: {
        type: String,
        required: true
    },

    UserName: {
        type: String,
        required: true
    },

    UserScore: {
        type: String,
        required: true
    }

})

const ScoreEntry = mongoose.model("UserScoreEntries", MessageSchema)

module.exports = ScoreEntry