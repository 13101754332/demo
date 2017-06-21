import React, { Component } from 'react';
import './App.css';
import Header from "./header.js";
import Banner from "./banner.js";
import Content from "./content.js";



class App extends Component {
  render() {
    return (<div>
      <Header></Header>
      {this.props.children}
    </div>);
  }
}

export default App;
