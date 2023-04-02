const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoUrl = `mongodb://127.0.0.1:27017/attemp2`;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const mwrGetUserId = require('./atp2mwrUserid');

app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', true);

//connect db
mongoose.connect(mongoUrl, () => {
    console.log("Mongod set")
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
const userModel = mongoose.model('User', userSchema);

const noteSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tag: { type: String, required: false }
});
const noteModel = mongoose.model('Note', noteSchema);


//signup
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const match = await userModel.findOne({ email: email });
        if (match) {
            console.log(match);
            res.status(400).json("User already taken")
        }
        else {
            //create sec pass
            const salt = await bcrypt.genSalt();
            const securePassword = await bcrypt.hash(password, salt);
            const savedUser = await userModel.create({
                name: name,
                email: email,
                password: securePassword
            });
            const userIdPayload = { user: { id: savedUser.id } };
            const secretKey = "We win";
            const token = jwt.sign(userIdPayload, secretKey);
            res.status(200).json(token)
        }
    } catch (error) {
        console.log(error)
    }
});


//login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const foundUser = await userModel.findOne({ email: email });
        if (!foundUser) {
            res.status(404).json("No such user found with the email")
        }
        else {
            const comparePass = await bcrypt.compare(password, foundUser.password)
            if (!comparePass) {
                res.status(400).json("Incorrect password")
            }
            else {
                //Logged in. So create token
                const userIdPayload = { user: { id: foundUser.id } }
                const secretKey = "I'm broke";
                const token = jwt.sign(userIdPayload, secretKey);
                res.status(200).json(token);
            }
        }
    } catch (error) {
        console.log(error);
    }
});

//create a note (login R)

app.post('/notes/add', mwrGetUserId, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        const savedNote = await noteModel.create({
            user: req.user.id,
            title: title,
            description: description,
            tag: tag
        });
        res.status(200).json({ message: "We have saved the Note successfully", savedNote });
    } catch (error) {
        console.log(error)
    }
});

//Update note login R

app.put('/notes/update/:id', mwrGetUserId, async (req, res) => {
    const { title, description, tag } = req.body;
    const { id } = req.params;
    try {
        const oldNote = await noteModel.findById(id)
        if (!oldNote) {
            res.status(404).json("Note not found")
        }
        else {
            if (oldNote.user != req.user.id) {
                res.status(400).json("You aren't authorised to update this note")
            }
            else {
                const updatedNote = {}
                if (title) { updatedNote.title = title };
                if (description) { updatedNote.description = description };
                if (tag) { updatedNote.tag = tag };
                const saveUpdatedNote = await noteModel.findByIdAndUpdate(id, updatedNote, { new: true })
                res.status(200).json({ Success: "Updated successfully", saveUpdatedNote })
            }
        }
    } catch (error) {
        console.log(error)
    }
});

//delete login R

app.delete('/notes/delete/:id', mwrGetUserId, async (req, res) => {
    const { id } = req.params;
    try {
        const foundNote = await noteModel.findOne({ _id: id })
        if (!foundNote) {

            res.status(404).json({ message: "Not found", foundNote })
        }
        else {
            // verify auth
            if(req.user.id!=foundNote.user){
                res.status(400).json("You have no perm to del")
            }
            else{
                await foundNote.remove();
                res.status(200).json("deleted successfully")
            }
        }
    } catch (error) {

    }
})


app.listen(5000, `127.0.0.1`, () => {
    console.log("App started")
});

