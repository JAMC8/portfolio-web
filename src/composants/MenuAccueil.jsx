import './scss/MenuAccueil.scss';
import { Link, NavLink } from 'react-router-dom';


export default function MenuAccueil(props)
{
    return(
        <div className="MenuAccueil">
            <ul className="nav">
                <NavLink to="/projets" className="navLinkAccueil"><li><img src='images-logo/LogoNom.png'/><a>Programation de Jeux</a></li></NavLink>
                <NavLink to="/projets" className="navLinkAccueil"><li><img src='images-logo/LogoNom.png'/><a>Programation Web</a></li></NavLink>
                <NavLink to="/a-propos" className="navLinkAccueil"><li><img src='images-logo/LogoNom.png'/><a>À Propos</a></li></NavLink>
                <NavLink to="/contact" className="navLinkAccueil"><li><img src='images-logo/LogoNom.png'/><a>Contact</a></li></NavLink>
            </ul>
        </div>
    );
}