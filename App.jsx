import React from 'react';
import UserForm from "./form.jsx";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      message: "From state",
      numbers: [1,2,3]
    },
    this.updateMessage = this.updateMessage.bind(this);
    
    
  }

  render() {
    const numbers = [1,2,3,4,5]
    const listItems = numbers.map(number => {
      <li>{number}</li>
    })
    return (
      <div>helloworld {this.state.message}
      <p>Code available in jenkins build</p>
            <button onClick={this.updateMessage}>update </button>
            <UserForm></UserForm>
      </div>
    );
  }

  updateMessage() {
    this.setState({
      message: "changed state"
    })
  }
}

export default App;