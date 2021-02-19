const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/checkout', (req, res) => {
  console.log('req', req.body)
  res.send('Success!')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})

