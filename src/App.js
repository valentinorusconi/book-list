import React, { Component } from 'react';
import BookList from './containers/BookList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BookList /> 
      </div>
    );
  }
}

export default App;
