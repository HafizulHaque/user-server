const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const { users } = require('./users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

app.get('/users', (req, res) => {
  let search = req.query.search;
  res.json(users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())));
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`app listening on port: ${PORT}`);
});


