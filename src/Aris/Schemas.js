const mongoose = require("mongoose")
const stShip = mongoose.model("guildshipper", mongoose.Schema({ _id: String, time: Number, gonderiChannel: String, messsages: String, eslestigi: String, eslesme: Number }))
const stStatus = mongoose.model("userStatus", mongoose.Schema({ _id: String, time: Number, status: Boolean }))

module.exports = { stShip, stStatus }