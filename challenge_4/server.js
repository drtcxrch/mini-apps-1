const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(console.log('Get request working!'));
})

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});

