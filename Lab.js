// Name: Pratham Pathak
//Email: ppathak5@myseneca.ca
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello WEB322!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
