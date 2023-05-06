const mongoose = require("mongoose")

const { Schema } = mongoose

const dataSchema = new Schema({
    name: String,
    dateOfBirthOrAge: String,
    sex: String,
    mobile: String,
    govtIssuedIdType: String,
    govtIssuedId: String,
    guardianName: String,
    guardianLabel: String,
    email: String,
    emergencyContactNumber: String,
    address: String,
    state: String,
    city: String,
    country: String,
    pincode: String,
    occupation: String,
    religion: String,
    martialStatus: String,
    bloodGroup: String,
    nationality: String,
})


module.exports = mongoose.model("data", dataSchema)