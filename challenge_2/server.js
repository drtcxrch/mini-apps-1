const express = require('express');
const bodyParser = require('body-parser');
const app = express();



//Serve client files
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));

app.get('/', (req, res) => {

})

app.post('/upload_json', (req, res) => {
  console.log('*****!!!!req:', req.body.json );
  res.sendStatus(200);
})

const port = 4000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})




