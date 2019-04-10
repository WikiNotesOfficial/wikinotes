import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Login from './Login';

const TITLE = 'WikiNotes'


class App extends Component {
  render() {
    return (
     
      <div>
         <Helmet>
      <title>{ TITLE }</title>
      </Helmet> 
      
      <Login />
      
    </div>
    
    );
  }
}

export default App;
