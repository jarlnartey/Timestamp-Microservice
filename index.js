const express = require("express")
const app = express()
const port = 3000


app.get("/", (req, res) => {
    res.send("hello worldadfaf!")
})

app.listen(port, () => {
    console.log("Im listening at: " + port)
})