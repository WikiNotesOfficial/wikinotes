import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Login from './Login';
import SignUp from './SignUp'

const TITLE = 'WikiNotes'


class App extends Component {
  render() {
    return (
     
      <div>
         <Helmet>
      <title>{ TITLE }</title>
      </Helmet> 
      
      <Login />
      <SignUp />
    </div>
    
    );
  }
}

export default App;
