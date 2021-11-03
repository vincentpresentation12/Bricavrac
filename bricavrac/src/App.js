import './App.css';
import Connexion from './connexion';
import Navigation from './navigation';
import Accueil from './Accueil';
import {BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
        <Router>
          <Navigation />
          <Route exact path='/' component={Accueil}></Route>
          <Route exact path="/connexion" component={Connexion}></Route>  
        </Router>
  );
}

export default App;
