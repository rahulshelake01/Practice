const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const logger  = require("./config/winston")

const app = express()

app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}))
app.use(morgan("combined", {stream: logger.stream}))

// logger.info("This is sample message")

logger.log({
    level:'info',
    message: "this is main message",
    request: {uid:10},
    source: "app.js"
})

app.use("/api/user", require("./router/user"))
app.use("/api", require("./router/post"))
app.use("/api", require("./router/graphql-router"))

const PORT = 8090

app.listen(PORT, () => console.log(`App start listening on http://localhost:${PORT}`))
