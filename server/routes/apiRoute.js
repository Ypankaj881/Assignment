const express = require("express")
const router = express.Router()

const { addDataMongo, getDataFromMongo } = require("../controller/apiController")

router.post("/adddata", addDataMongo)
router.get("/getdata", getDataFromMongo)

module.exports = router