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
  }

  handleChange() {

  }

  handleSubmit() {

  }

  render() {
    return (
      <div>Hi there!</div>
    )
  }
}

const Home = (props) => {
  if (props.currentForm !== 0) {
    return null;
  }

  return (
    <button>Checkout</button>
  )
}



const F1 = (props) => {
  if (props.currentForm !== 1) {
    return null;
  }
  return (
    <div>

    </div>
  )
}


const F2 = (props) => {
  if (props.currentForm !== 2) {
    return null;
  }
  return (
    <div>

    </div>
  )
}

const F3 = (props) => {
  if (props.currentForm !== 3) {
    return null;
  }
  return (
    <div>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));