import React, { Component } from 'react';
import Accueil from './Component/Accueil';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Resultat from './Component/Resultat';





class App extends Component {
  render() {
  return (
    <div>
      <Router>

    <Route exact path="/" component={Accueil}/>
    <Route exact path="/Resultat" component={Resultat}/>
    </Router>
    </div>
  );
}
}
export default App;
