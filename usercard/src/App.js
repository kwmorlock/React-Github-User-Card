import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Usercard from "./Usercard";

class App extends React.Component {
  constructor() {
    super ();
    this.state = {
      user: null,
      followers: []
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/kwmorlock')
    .then(response => {
      console.log(response);
      this.setState({
        user: response.data

      });
    })
    .catch(error => {
      console.log("the data was not returned, error")
    })
  
    axios.get('https://api.github.com/users/kwmorlock/followers')
    .then(response => {
      console.log(response);
      this.setState({
        followers: response.data
      })
    })
    .catch(error => {
      console.log("the data was not returned, error")
    })

  }

  render() {
    return(
    <div>
     {this.state.user && <Usercard user={this.state.user}/>}
    {this.state.followers && this.state.followers.map((follower, idx) => {
      return (
        <Usercard user ={follower} />
      )
    })}
    
    </div>
    )
  }
}


export default App; 