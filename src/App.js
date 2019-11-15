
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
import UseReducer from './component/UseReducer';
import Nav from './component/Nav';
import EjemploReducer from "./component/EjemploReducer";
import OtroReducer from "./component/OtroReducer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/ejemploreducer' component={EjemploReducer} />
            <Route path='/welcome' component={Welcome} />
            <Route path='/exercises' component={ExerciseWithMyHook} />
            <Route exact path='/card' component={Cards} />
            <Route exact path='/otroreducer' component={OtroReducer} />
            <Route exact path='/hola' component={Hola} />
            <Route exact path='/exercise/new' component={ExerciseNewContainer} />
            <Route exact path='/usereducer' component={UseReducer} />
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
