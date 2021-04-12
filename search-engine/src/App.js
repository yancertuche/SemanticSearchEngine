import React, {Component} from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {Result} from "./Pages/Result"
import {Home} from "./Pages/Home"

export class App extends Component {
  
  render(){
    return (
      <Router>
        <Switch>
          <Route path='/' component={Home}>
          </Route>
          <Route path='/q' component={Result}>
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
