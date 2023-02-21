

const cors = require('cors')
const express = require('express')
const app = express()
const port = 5000;

const connToMongodb = require(`./database`)
connToMongodb();

// set app use to json
app.use(express.json())
// set app use to cors to avoid errors
app.use(cors())


