import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.component {
  constructor() {
    super ();
    this.state = {
      userObject: null,
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/kwmorlock')
    .then(response => {
      console.log(response);
      this.setState({
        userObject: response.data

      });
    })
    .catch(error => {
      console.log("the data was not returned, error")
    })
  }

  render() {
    return(
    <div>
     {this.stateuserObject && <Usercard user={this.state.userObject}/>}
    </div>
    )
  }
}


export default App; 