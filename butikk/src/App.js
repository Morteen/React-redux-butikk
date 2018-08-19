import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Navn from './Components/Navn';
import Produkter from './Components/Produkter';
import Ordre from './Components/Ordre';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" /> 
          
        </header>
        <p className="App-intro">
        
        
        </p>
        

<div className="wrapper">
  <div className="box a"> <Navn/>      </div>
  <div className="box b"> <Produkter/> </div>
  <div className="box c"> <Ordre/>     </div>
</div>


      </div>


       </Provider>
    );
  }
}

export default App;
