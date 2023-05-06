const Data = require("../models/apiSchema")

const addDataMongo = async (req, res) => {
    try {
        const data = new Data({
            name: req.body.name,
            dateOfBirthOrAge: req.body.dateOfBirthOrAge,
            sex: req.body.sex,
            mobile: req.body.mobile,
            govtIssuedIdType: req.body.govtIssuedIdType,
            govtIssuedId: req.body.govtIssuedId,
            guardianName: req.body.guardianName,
            guardianLabel: req.body.guardianLabel,
            email: req.body.email,
            emergencyContactNumber: req.body.emergencyContactNumber,
            address: req.body.address,
            state: req.body.state,
            city: req.body.city,
            country: req.body.country,
            pincode: req.body.pincode,
            occupation: req.body.occupation,
            religion: req.body.religion,
            martialStatus: req.body.martialStatus,
            bloodGroup: req.body.bloodGroup,
            nationality: req.body.nationality,
        })
        await data.save()

        res.status("201").json({ success: true, message: "data saved" })

    } catch (error) {
        res.status("500").json({ success: false, message: "Error occured" })
    }
}
const getDataFromMongo = async (req, res) => {
    try {
        const data = await Data.find({})
        res.status("201").json({ success: true, data: data })
    } catch (error) {
        res.status("500").json({ success: false, message: "Error occured" })
    }

}

module.exports = { addDataMongo, getDataFromMongo }