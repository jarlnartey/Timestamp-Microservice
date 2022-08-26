const express = require("express")
const app = express()
const port = 3000

const dateFormatter = (date) => {

}

app.get("/api/:date?", (req, res) => {
    let date = req.params.date
    const utc = new Date(date)
    const unix = utc.getTime()
    let timeStamps = { "unix": unix, "utc": utc.toUTCString() }
    res.send(timeStamps)
})



app.listen(port, () => {
    console.log("Im listening at: " + port)
})