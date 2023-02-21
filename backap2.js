const mongoose = require('mongoose');
const express = require('express');

const mongoUrl = `mongodb://127.0.0.1:27017/backapp2`;
const app = express();
const port = 5000;

app.use(express.json());


mongoose.connect(mongoUrl, () => {
    console.log("Mongod connection done")
})

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true }
});
const humanModel = mongoose.model('backendapp2', userSchema);

//API ROUTES

app.get('/', (req, res) => {
    res.send("This is //")
})
app.get('/mama', (req, res) => {
    res.send("This is mama api")
})
app.get('/greet/:somename', (req, res) => {
    const somename = req.params.somename;
    res.status(200).send(`Welcome ${somename}!`)
})

app.post('/user', async (req, res) => {
    const { name, age } = req.body; //IT SHOULD BE req.body! not res.body! we send the response, client sends the req!
    const newHuman = humanModel({ name, age });
    try {
        const savedHuman = await newHuman.save();
        const uniqueID = savedHuman._id.toString();
        console.log(`UI for ${name} is ${uniqueID}`);
        
        res.status(200).send(`Mongod saved ${name} ${age}`)
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
});

//CODE BY CHATGPT TO UPDATE THE NAME AND AGE

app.put('/user/:id', async (req, res) => { //we'll have to include the particular note id in the api call when we hit
    const { id } = req.params; //get id from req link hit
    const { name, age } = req.body;  //destructure name and age from json
    
    try {
      const match = await humanModel.findByIdAndUpdate(id, { name, age }, { new: true }); //tell mongoose to find doc in humanModel format with paricular id, then take {name,age}, update it and return new doc
      if (match) {
        res.status(200).send(`User with ID ${id} updated successfully`);
      } else {
        res.status(404).send(`User with ID ${id} not found`);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.listen(port, () => {
    console.log(`Backend app running on port ${port}`)
})
