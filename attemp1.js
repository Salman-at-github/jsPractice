const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
app.use(express.json());
app.use(cors());

const mongoUrl = `mongodb://127.0.0.1:27017/backapp2`;
mongoose.connect(mongoUrl,()=>{
    console.log("Mongod connected")
});

const userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:email, required:true},
    password: {type:String, required:true}
});
const userModel = mongoose.model('Fullscript',userSchema);

const noteSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    tag:{type:String,required:false}
});
const noteModel =  mongoose.model('FSnotes',noteSchema);

app.post('/signup',async(req,res)=>{
    const {name, email, password} = req.body;
    const match = userModel.find({email:req.body.email})
    if(match){
        res.status(404).send('User email taken already!')
    };
    const salt = await bcrypt.genSalt();
    const secPassword = await bcrypt.hash(password,salt);
    const newUser = await userModel.create({//model.create saves the doc in mongodb
        name: name,
        email: email,
        password: secPassword
    });
    const userIDPayload  = {user: {id: newUser.id}};
    
})