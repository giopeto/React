import React, { Component } from 'react';
import './App.css';

import UserContainer from "./containers/UserContainer";

class App extends Component {
  render() {
    return (
      <UserContainer showUsersByType="all" limit={5}/>
    );
  }
}

export default App;
