import React from 'react';


class Usercard extends React.Component {
    render() {
      return(
        <div>
            <p>{this.props.user.login}</p>
            <img src={this.props.user.avatar_url} />
        </div>
      );
    }
  }
  
  
  export default Usercard; 