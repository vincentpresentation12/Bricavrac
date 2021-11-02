import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <div class='link'>
            <Link style={{marginLeft:5 , }} to="/connexion">Connexion</Link>
            <Link style={{marginLeft:5 , }} to="/">Accueil</Link>
        </div>
    )
}

export default Navigation