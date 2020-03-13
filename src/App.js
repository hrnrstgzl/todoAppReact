import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import TodoLists from './component/TodoLists';

function App() {
var state = {
  user : null,
  isLogged : false
}
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path = "/" component = {Login}/>  
          <Route exact path = "/signup" component = {Register}/>
          <Route exact path = "/email/:id" component = {TodoLists}/>
          <Route render = {
            () => {
              return <h3>404 Not Found</h3>
            }
          }/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
