const express = require('express')
const cors = require('cors')
const connectDb = require('./components/connection')
const scoreDb = require('./components/scores')
const app = express()

const baseUrl = "https://robo-dash.netlify.app"
app.use(cors({
    origin: baseUrl,
    methods: ["GET", "POST"],
}))
app.use(express.json())
connectDb()


app.get("/", (req, res) => {
    res.send("Server Running")
})

app.post("/userScores", async (req, res) => {
    // console.log(req.body)
    const picture = req.body.userImage
    const name = req.body.userName
    const score = req.body.userScore

    const message = new scoreDb(
        {
            UserImage: picture,
            UserName: name,
            UserScore: score
        })

    try {
        await message.save()
        console.log("Saved");
        res.send("Success")

    } catch (error) {
        console.log(error.message);
    }
})

app.get("/ScorBoard", (req, res) => {
    scoreDb.find({}, (error, result) => {
        if (error) {
            res.send(error.message)
        }

        const refinedScores = result.sort(function (a, b) {
            return parseInt(a.UserScore) - parseInt(b.UserScore)
        })

        // console.log(refinedScores)
        // console.log(result)
        res.send(refinedScores.reverse().slice(0, 10))
    })
})

app.listen(process.env.PORT || 5000, () => {
    console.log("server running");
})