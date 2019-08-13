import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';

export default class App extends Component {
  state = {};
  render() {
    return (
      <div className='container'>
        <Header title='Admin Page' />
      </div>
    );
  }
}
