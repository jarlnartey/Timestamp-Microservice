const express = require("express")
const app = express()
const port = 3000

app.get("/api/:date?", (req, res) => {
    let date = req.params.date

    //Check if date format, else it is unix format
    if (date.includes("-")) {

        // Check if invalid date
        if (!new Date(date).getDay()) return res.send({ error: "Invalid Date" })

        // Send out dates
        const utc = new Date(date)
        const unix = utc.getTime()
        let timeStamps = { "unix": unix, "utc": utc.toUTCString() }
        res.send(timeStamps)
    } else {

        // Check if invalid date
        if (!new Date(parseInt(date)).getDay()) return res.send({ error: "Invalid Date" })

        // Send out dates
        const utc = new Date(parseInt(date))
        let timeStamps = { "unix": parseInt(date), "utc": utc.toUTCString() }
        res.send(timeStamps)
    }
})

app.listen(port, () => {
    console.log("Im listening at: " + port)
})