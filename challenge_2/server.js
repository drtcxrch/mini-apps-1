const express = require('express')
const app = express()
const port = 3000

//Serve client files
app.use(express.static('client'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/upload_json', (req, res) => {
  console.log('*****!!!!req:', req, '******!!!!!res', res);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

