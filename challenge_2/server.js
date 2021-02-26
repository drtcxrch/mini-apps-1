const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const path = require('path');

//Serve client files
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));

app.get('/', (req, res) => {

})

app.post('/', (req, res) => {
  var path = './samples/'
  console.log(req);
  let rawdata = fs.readFileSync(path + req.body.json);
  let parsed = JSON.parse(rawdata);
  var converted = jsonToCSV(parsed);

  res.set('Content-Type', 'text/html');
  var response = (`<form id="formdata" enctype="application/json" method="POST">
      <input id="selectFiles" type="file" name="json" acccept="json">
      <button id="submit" type="submit">Submit</button>
    </form>`) + converted;

  res.end(response);
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
          newLine = newLine.slice(0, newLine.length - 1);
          newLine += '<br>'
          dataCollector(json.children[i]);
        }
      }
    }
  }

  dataCollector(json);

  var csv = fields.join(',') + '<br>' + newLine.slice(0, newLine.length - 1);
  return csv;

}

const port = 4000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})




