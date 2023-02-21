const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());

//homepage
app.get('/',(req,res)=>{
    res.send("Homepage is here")
})

// GET request to /api/hello
app.get('/api/hello', (req, res) => {
  res.send('Hello, API!');
});

// GET request to /api/greeting/:name
app.get('/api/greeting/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

// POST request to /api/user
app.post('/api/user', (req, res) => {
  const { name, email } = req.body;
  // Code to add user to database would go here
  res.send(`User ${name} with email ${email} was added to the database. Post method handled successfully!`);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
