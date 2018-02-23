import React, { Component } from 'react';
//import AddPost from './components/addPost';
import ShowPost from './components/showPost';


import Signin  from './signin';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>

      <showPost />
      <Signin />
      </div>
    );
  }
}

export default App;
