const mongoose = require('mongoose')
const mongoUrl = `mongodb://127.0.0.1:27017/mynotes`

const connToMongodb = async ()=>{
    await mongoose.connect(mongoUrl, ()=>{
        console.log("Connected to mongodb")
    })
}

module.exports = connToMongodb;