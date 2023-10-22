const mongoosec = require("mongoose");
const { mongo } = require("../../config.js");
let mongoConf = { useNewUrlParser: true, useUnifiedTopology: true, }
mongoosec.connect(mongo, mongoConf).then(c => console.log("MongoDb Bağlandı")).catch(err => console.error("MongoDb Bağlanılamadı" + " " + err));
