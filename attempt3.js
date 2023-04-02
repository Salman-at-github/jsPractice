const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const mwrGetUserId = require('./mwratt3');

const mongoUrl = `mongodb://127.0.0.1:27017/attemp3`;

mongoose.connect(mongoUrl, () => {
    console.log("Mongod connected")
});

app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', true);

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})
const userModel = mongoose.model("User", userSchema);

const noteSchema = new mongoose.Schema({
    user: { id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tag: { type: String },
    date: { type: Date, default: Date.now }
})
const noteModel = mongoose.model("Note", noteSchema);


//sign up

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const match = await userModel.findOne({ email: email });
        if (match) {
            res.status(400).json("Email taken")
        }
        else {
            const salts = await bcrypt.genSalt();
            const securePassword = await bcrypt.hash(password, salts);

            const savedUser = await userModel.create({
                name: name, email: email, password: securePassword
            });
            const userIdPayload = { user: { id: savedUser.id } };
            const secretKey = "boring";
            const token = jwt.sign(userIdPayload, secretKey);
            res.status(200).json({ message: "User created successfully ", pay: userIdPayload, token: token });
        }
    } catch (error) {
        console.log(error)
    }
});

//login

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const matchUser = await userModel.findOne({ email: email });
        if (!matchUser) {
            res.status(404).json("User not found")
        }
        else {
            const comparePass = await bcrypt.compare(password, matchUser.password);
            if (!comparePass) {
                res.status(400).json("Wrong pass")
            }
            else {
                const userIdPayload = { user: { id: matchUser.id } }; //if you use {user:{id:matchUser._id}}, the id property of userIdPayload.user will be an ObjectId object, while if you use {user:{id:matchUser.id}}, the id property will be a string representation of the ObjectId.
                const secretKey = "Boring";
                const token = jwt.sign(userIdPayload, secretKey);
                res.status(200).json({ Success: "Logged in successfully", token: token })
            }
        }
    } catch (error) {
        console.log(error)
    }
});

//addnote
app.post('/notes/add', mwrGetUserId, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        const savedNote = await noteModel.create({
            user: { id: req.user.id },
            title: title,
            description: description,
            tag: tag
        });
        res.status(200).json({ succ: "saved n", note: savedNote })
    } catch (error) {
        console.log(error)
    }
});

//update
app.put('/notes/update/:id', mwrGetUserId, async (req, res) => {
    const { title, description, tag } = req.body;
    const { id } = req.params;
    try {
        const foundOldNote = await noteModel.findOne({ id: id });
        if (!foundOldNote) {
            res.status(404).json("Note not found")
        }
        else {
            if (req.user.id != foundOldNote.user.id) {
                res.status(400).json("Not authorized to update!")
            }
            else {
                let newNote = {};
                if (title) { newNote.title = title };
                if (description) { newNote.description = description };
                if (tag) { newNote.tag = tag };
                const updatedNote = await noteModel.findByIdAndUpdate(id, newNote, { new: true });
                res.status(200).json({ message: "Note updated", note: updatedNote })
            }
        }

    } catch (error) {
        console.log(error)
    }
});
app.delete('/notes/delete/:id', mwrGetUserId, async (req, res) => {
    const { id } = req.params;
    try {
        const foundOldNote = await noteModel.findOne({ id: id });
        if (!foundOldNote) {
            res.status(404).json("Note not found")
        }
        else {
            if (req.user.id != foundOldNote.user.id) {
                res.status(400).json("Not authorized to delete!")
            }
            else {
                await foundOldNote.remove();
                res.status(200).json("deleted")
            }
        }

    } catch (error) {
        console.log(error)
    }
});





const port = 5000;
app.listen(port, () => {
    console.log("Backend running on 5k")
})