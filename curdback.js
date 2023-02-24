const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const mongoUrl = `mongodb://127.0.0.1:27017/backapp2`;
const port = 5000;
app.use(express.json());
app.use(cors());

mongoose.connect(mongoUrl, ()=>{
    console.log("Mongod conn esta")
})


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true }
})
const personModel = mongoose.model('personCurd',userSchema);
app.post('/api/sentdata', async (req, res) => {
    const { name, age } = req.body;
    const newPerson = new personModel({name, age});
    try {
        await newPerson.save();
        res.status(200).send(`${name}'s Info saved to mongodb`);
    } catch (error) {
        res.status(500).json({ error: error.message })}
    });

app.put('/api/update/:id', async (req, res) => {
    const { name, age } = req.body;
    const { id } = req.params;
    try {
        const prev = await personModel.findById(id);
        const match = await personModel.findByIdAndUpdate(id, { name, age }, { new: true })
        if (match) {
            res.status(200).send(`${prev.name}'s name updated to ${match.name} and age ${prev.age} changed to ${match.age}`)
        }
        else {
            res.status(400).send(`${id} id not found`)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

//del
app.delete('/api/delete/:id',async(req,res)=>{
    const {id} = req.params;
const match = await personModel.findByIdAndDelete(id);
if (match) {
    res.status(200).send(`Data deleted for ${match.name}`)
}
else {
    res.status(400).send(`${id} id not found`)
}
})

//API for sending all users as response

app.get('/api/getdata', async (req, res) => {
    personModel.find()
        .then(data => res.json(data))
        .catch(err => res.send(err))
})

app.listen(port,()=>{
    console.log("Backend app running on port")
})