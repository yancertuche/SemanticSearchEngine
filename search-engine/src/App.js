import React, {Component} from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import {Home} from "./Pages/Home"
import {Result}from './Pages/Result';
import { Dashboard } from './Pages/Dashboard';

export class App extends Component {
  
  render(){
    return (
      <Router>
          <Route exact path='/' component={Home}/>
          <Route path='/result' component={Result}/>
          <Route path='/graphics' component={Dashboard}/>
      </Router>
    );
  }
}
export default App;
