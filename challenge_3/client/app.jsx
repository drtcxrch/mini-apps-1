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
    console.log(e.target);
  }

  handleSubmit(e) {
    console.log(e.target);
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
        <button type="button" onClick={this.next}>
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
      <label>Name:</label>
      <label>Email:</label>
      <label>Password:</label>
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
      <label>Line 2:</label>
      <label>City:</label>
      <label>State:</label>
      <label>Zip:</label>
      <label>Phone #:</label>
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
      <label>Expiration Date:</label>
      <label>CVV:</label>
      <label>Billing Zip:</label>
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