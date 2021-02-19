const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'checkout'
});

connection.connect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/checkout', (req, res) => {
  let customer = req.body;
  let sql = 'INSERT INTO customer SET ?';
  let post = {
    name: customer.name,
    email: customer.email,
    password: customer.password,
    line_1: customer.line_1,
    line_2: customer.line_2,
    city: customer.city,
    state: customer.state,
    zip_code: customer.zip_code,
    phone_number: customer.phone_number,
    credit_card: customer.credit_card,
    expiry_date: customer.expiry_date,
    cvv: customer.cvv,
    billing_zip: customer.billing_zip
  }
  connection.query(sql, post, (err, result) => {
    if (err) {
      throw err;
    };

    console.log('1 record inserted');
  })
  res.send('Success!')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
})

