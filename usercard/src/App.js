import React from 'react';
import logo from './logo.svg';
import './App.css'; import React from 'react';
import axios from 'axios';

class App extends React.component {
  constructor() {
    super ();
    this.state = {
      card: [],
      cardName: ""
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


  render() {
    return(
      <div></div>
    )
  }
}


export default App; 