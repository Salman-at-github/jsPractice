//IMPORTS AND STUFF

const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const getUserId = require('./verify');

//PARSING AND CORS, and set stricquery
app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', true);

//CONNECTING TO MONGODB
const mongoUrl = `mongodb://127.0.0.1:27017/attemp1`;
mongoose.connect(mongoUrl, () => {
    console.log("Mongod connected")
});


//SCHEMA AND MODEL FOR USER AND NOTE
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
const userModel = mongoose.model('UsersFolder', userSchema);

const noteSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'UsersFolder' }, //user is an id that comes from folder of users
    title: { type: String, required: true },
    description: { type: String, required: true },
    tag: { type: String, required: false, default: "No tag entered" }
});
const noteModel = mongoose.model('NotesFolder', noteSchema);

//                                             USER RELATED
//SIGNUP (login NR)
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const match = await userModel.findOne({ email }); //find is never null so use findOne
        if (match) {
            res.status(404).send('User email taken already!')
        }
        else {
            const salt = await bcrypt.genSalt();
            const secPassword = await bcrypt.hash(password, salt);
            const newUser = await userModel.create({//model.create saves the doc in mongodb
                name: name,
                email: email,
                password: secPassword
            });

            const userIdPayload = { user: { id: newUser.id } };
            const secretKey = "I'm tired";
            const token = jwt.sign(userIdPayload, secretKey);
            res.status(200).json(`Signed up successfully, token is: (${token})`)
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//SIGNIN (login NR)
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const foundUser = await userModel.findOne({ email });
        if (!foundUser) {
            res.status(404).json("No user with such email found")
        }
        //ELSE email is right, now compare entered password with db password
        else {
            const passMatch = await bcrypt.compare(password, foundUser.password);
            // if passwords don't match, respond with error
            if (!passMatch) {
                res.status(400).send({ error: "Incorrect password!" })
            }
            else {
                //Else logged in, create n send another token
                const userIdPayload = { user: { id: foundUser.id } };
                const secretKey = "I'm tired";
                const token = jwt.sign(userIdPayload, secretKey);
                res.status(200).json(`Logged in successfully, token is: (${token})`)
            }
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
app.get('/welcome', (req, res) => {
    res.status(200).json("Welcome to your test")
});


//                                          NOTES RELATED

//ADD NOTE (login R)
app.post('/notes/add', getUserId, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        savedNote = await noteModel.create({
            user: req.user.id,
            title: title,
            description: description,
            tag: tag
        });
        res.status(200).json(`Note saved successfully ${savedNote}`)
    } catch (error) {
        console.log(error);
        res.status(400).send({ error: "Could not save not" })
    }
});


//experiment update note (login R) (SUCCESSFULL)
app.put('/notes/update/:id', getUserId, async (req, res) => {
    const { id } = req.params;
    const { title, description, tag } = req.body;
    try {

        const foundNote = await noteModel.findById(id)
        if (!foundNote) {
            res.status(404).json("No note found")
        }
        else {
            if (foundNote.user == req.user.id) {
                if (title && description) {
                    foundNote.title = title;
                    foundNote.description = description;
                    foundNote.tag = tag;
                    await foundNote.save();
                    res.status(200).json("Note updated successfully");
                }
                else {
                    res.status(400).json("Enter all fields!")
                }
            }
            else {
                res.status(400).json("You're not authorized to update this note")
            }
        }
    } catch (error) {
        console.log(error)
    }
});


//DELETE NOTE (login R)
app.delete('/notes/delete/:id', getUserId, async (req, res) => {
    const { id } = req.params;
    try {
        const foundNote = await noteModel.findById(id);
        if (!foundNote) {
            res.status(404).json("Note not found for deletion")
        }
        else {//first verify auth then allow deletion
            if (foundNote.user == req.user.id) {
                foundNote.remove();
                res.status(200).json("Note Deleted!")
            }
            else {
                res.status(400).send("Not authorized for del")
            }
        }
    } catch (error) {
        console.log(error)
    }
});

//get all user related notes
app.get('/notes/get', getUserId, async (req, res) => {
    try {
        const notes = await noteModel.find({ user: req.user.id });
        res.status(200).json(notes)
    } catch (error) {
        console.log(error)
    }
})


//START APP
const port = 3000;
app.listen(port, `127.0.0.1`, () => {
    console.log("Backend app running on port 3k")
})











//UPDATE NOTE (NO LONGER NEEDED AS I CREATED A CUSTOM UPDATE API BETTER THAN THIS)
// app.put('/notes/update/:id', getUserId, async (req, res) => {
//     const { id } = req.params;
//     const { title, description, tag } = req.body;
//     try {
//         const foundNote = await noteModel.findById(id) //find the note with it's id
//         if (!foundNote) {
//             res.status(404).send("Note wasn't found")
//         }
//         else { //check if authorized by comparing user.id from middleware to foundNote.user (same)
//             if (foundNote.user != req.user.id) {
//                 res.status(400).send("You don't own this note, can't update")
//             }
//             else {
//                 updatedNote = {}
//                 if (title && description && tag) { //if fields exist, assign them to updatedNote
//                     updatedNote.title = title;
//                     updatedNote.description = description;
//                     updatedNote.tag = tag;
//                     const updateOldNote = await noteModel.findByIdAndUpdate(id, { $set: updatedNote }, { new: true });
//                     if (!updateOldNote) {
//                         res.status(400).send("Update failed successfully")
//                     }
//                     else {
//                         res.status(200).json("Note updated succ")
//                     }
//                 }
//                 else {
//                     res.status(400).send("Enter all fields!")
//                 }
//             }
//         }
//     } catch (error) {
//         console.log(error)
//         res.status(400).send("Catch error")
//     }
// });