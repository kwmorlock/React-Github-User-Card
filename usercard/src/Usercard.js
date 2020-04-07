import React from 'react';


class Usercard extends React.component {
    render() {
      return(
        <div>
            <p>{this.props.user.login}</p>
            <img {src = this.props.user.avatar} />
        </div>
      );
    }
  }
  
  
  export default App; 