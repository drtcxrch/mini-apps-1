class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 0,
      name: '',
      email: '',
      password: '',
      line_1: '',
      line_2: '',
      city: '',
      state: '',
      zip_code: '',
      phone_number: '',
      credit_card: '',
      expiry_date: '',
      cvv: '',
      billing_zip: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.next = this.next.bind(this);
    this.nextButton = this.nextButton.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    const {name, email, password, line_1, line_2, city, state, zip_code, phone_number, credit_card, expiry_date, cvv, billing_zip} = this.state;

    const customer = {
      name, email, password, line_1, line_2, city, state, zip_code, phone_number, credit_card, expiry_date, cvv, billing_zip
    }

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(customer)
    }

    fetch('http://localhost:3000/checkout', requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    })

    this.setState({
      currentForm: 0,
      name: '',
      email: '',
      password: '',
      line_1: '',
      line_2: '',
      city: '',
      state: '',
      zip_code: '',
      phone_number: '',
      credit_card: '',
      expiry_date: '',
      cvv: '',
      billing_zip: ''
    })
  }

  next() {
    let currentForm = this.state.currentForm;
    currentForm = currentForm === 4 ? 0 : currentForm + 1;
    this.setState({
      currentForm: currentForm
    })
  }

  nextButton() {
    let currentForm = this.state.currentForm;
    if (currentForm === 0) {
      return (
        <button type="button" onClick={this.next}>
          Checkout
        </button>
      )
    } else if (currentForm > 0 && currentForm < 4) {
      return (
        <button type="button" onClick={this.next}>
          Next
        </button>
      )
    } else {
      return (
        <button type="button" onClick={this.handleSubmit}>
          Purchase
        </button>
      )
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Home
            currentForm={this.state.currentForm}
            handleChange={this.handleChange}
          />
          <F1
            currentForm={this.state.currentForm}
            handleChange={this.handleChange}
          />
          <F2
            currentForm={this.state.currentForm}
            handleChange={this.handleChange}
          />
          <F3
            currentForm={this.state.currentForm}
            handleChange={this.handleChange}
          />
          <Final
            currentForm={this.state.currentForm}
            handleChange={this.handleChange}
          />
          {this.nextButton()}
        </form>

      </div>
    )
  }
}

const Home = (props) => {
  if (props.currentForm !== 0) {
    return null;
  }

  return (
    <h1>Multistep Checkout</h1>
  )
}



const F1 = (props) => {
  if (props.currentForm !== 1) {
    return null;
  }
  return (
    <div>
      <label>Name: </label>
      <input
        id="name"
        name="name"
        value={props.name}
        onChange={props.handleChange}
      />
      <br />
      <label>Email: </label>
      <input
        id="email"
        name="email"
        value={props.email}
        onChange={props.handleChange}
      />
      <br />
      <label>Password: </label>
      <input
        id="password"
        name="password"
        value={props.password}
        onChange={props.handleChange}
      />
    </div>
  )
}


const F2 = (props) => {
  if (props.currentForm !== 2) {
    return null;
  }
  return (
    <div>
      <label>Line 1:</label>
      <input
        id="line_1"
        name="line_1"
        value={props.line_1}
        onChange={props.handleChange}
      />
      <br />
      <label>Line 2:</label>
      <input
        id="line_2"
        name="line_2"
        value={props.line_2}
        onChange={props.handleChange}
      />
      <br />
      <label>City:</label>
      <input
        id="city"
        name="city"
        value={props.city}
        onChange={props.handleChange}
      />
      <br />
      <label>State:</label>
      <input
        id="state"
        name="state"
        value={props.state}
        onChange={props.handleChange}
      />
      <br />
      <label>Zip:</label>
      <input
        id="zip_code"
        name="zip_code"
        value={props.zip_code}
        onChange={props.handleChange}
      />
      <br />
      <label>Phone #:</label>
      <input
        id="phone_number"
        name="phone_number"
        value={props.phone_number}
        onChange={props.handleChange}
      />
      <br />
    </div>
  )
}

const F3 = (props) => {
  if (props.currentForm !== 3) {
    return null;
  }
  return (
    <div>
      <label>Credit Card #:</label>
      <input
        id="credit_card"
        name="credit_card"
        value={props.credit_card}
        onChange={props.handleChange}
      />
      <br />
      <label>Expiration Date:</label>
      <input
        id="expiry_date"
        name="expiry_date"
        value={props.email}
        onChange={props.handleChange}
      />
      <br />
      <label>CVV:</label>
      <input
        id="cvv"
        name="cvv"
        value={props.cvv}
        onChange={props.handleChange}
      />
      <br />
      <label>Billing Zip:</label>
      <input
        id="billing_zip"
        name="billing_zip"
        value={props.billing_zip}
        onChange={props.handleChange}
      />
      <br />
    </div>
  )
}

const Final = (props) => {
  if (props.currentForm !== 4) {
    return null;
  }
  return (
    <div>
      <h1>Click to submit!</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));