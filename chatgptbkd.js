const express = require('express');
const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
  const { name, age } = req.body;
  console.log(`Received a new user: ${name}, ${age}`);

  // Do something with the data, such as save it to a database

  res.status(200).send("Hmmmm");
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
