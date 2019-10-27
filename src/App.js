
import React, { Component } from "react";

import "./App.css";
//import  { Routes }  from "./routes";
import ContadorHooks from "./component/contadorHooks";
import Hola from './component/Hola';
import Cards from './component/Cards';
import ExerciseNewContainer from './component/ExerciseNewContainer';
import ExerciseWithMyHook from './component/ExerciseWithMyHook';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './component/NotFound';
import Welcome from './component/Welcome';

import Nav from './component/Nav';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/welcome' component={Welcome} />

            <Route path='/exercises' component={ExerciseWithMyHook} />
            <Route exact path='/card' component={Cards} />
            <Route exact path='/hola' component={Hola} />
            <Route exact path='/exercise/new' component={ExerciseNewContainer} />
            <Route component={NotFound} />


          </Switch>
          <Nav />
        </BrowserRouter>






        <ContadorHooks />



      </div>
    );
  }
}

export default App;
