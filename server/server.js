require("dotenv").config();
const connectToMongo = require("./config/db")
connectToMongo()

const express = require("express");
const app = express()
const cors = require("cors")
app.use(cors())

app.use(express.json())
const apiRoutes = require("./routes/apiRoute")
app.use("/api", apiRoutes)
app.listen(5000, () => {
    console.log("Server is running")
})


