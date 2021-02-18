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
    currentForm = currentForm === 4 ? 1 : currentForm + 1;
    this.setState({
      currentForm: currentForm
    })
  }

  nextButton() {
    let currentForm = this.state.currentForm;

    if (currentForm < 4) {
      return (
        <button type="button" onClick={this.next}>
          Next
        </button>
      )
    }

    return null;
  }

  render() {
    return (
      <div>
        <h1>Multistep Checkout</h1>
        <Home />
        <F1 />
        <F2 />
        <F3 />
        <Final />
      </div>
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

const Final = (props) => {
  if (props.currentForm !== 4) {
    return null;
  }
  return (
    <div>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));