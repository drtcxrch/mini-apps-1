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
  // console.log('*****!!!!req:', req.body.json );
  // console.log(res);
  var json = req.body.json;
  // console.log('json', json);
  var parsed = JSON.parse(json);
  // console.log(parsed);
  // console.log('csv', jsonToCSV(parsed));
  console.log('csv', jsonToCSV(parsed));
  res.sendStatus(200);
})

var jsonToCSV = (json) => {

  var fields = [];
  var newLine = '';

  var dataCollector = (json) => {

    for (var field in json) {

      if (fields.indexOf(field) === -1 && field !== 'children') {
        fields.push(field);
      }

      if (field !== 'children') {
        newLine += (json[field] + ',');
      } else {
        for (var i = 0; i < json.children.length; i++) {
          newLine += '\r\n'
          dataCollector(json.children[i]);
        }
      }
    }
  }

  dataCollector(json);

  var csv = fields.join(',') + '\r\n' + newLine;
  return csv;

}

const port = 4000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})




