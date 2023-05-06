const mongoose = require("mongoose")
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: "true"
};


const connectToMongo = () => {
    mongoose.connect(process.env.MONGODBURL, connectionParams)
        .then(() => {
            console.log("database connected")
        })
        .catch((error) => {
            console.log("database not connected", error)
        })
}

module.exports = connectToMongo