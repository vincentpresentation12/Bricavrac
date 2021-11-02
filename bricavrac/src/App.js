import Logo from './page1';
import './App.css';
import Connexion from './connexion';
import Navigation from './navigation';
import Accueil from './Accueil';
import {BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>
          <Navigation />
          <Route exact path='/' component={Accueil}></Route>
          <Route exact path="/connexion" component={Connexion}></Route>  
        </Router>
    </div>
  );
}

export default App;
