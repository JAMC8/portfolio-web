import './scss/MenuAccueil.scss';
import { Link, NavLink } from 'react-router-dom';


export default function MenuAccueil(props)
{
    return(
        <div className="MenuAccueil">
            <ul className="nav">
                <NavLink to="/projets" className="navLinkAccueil"><li><img src='images/LogoNom.png'/><span>Programation de Jeux</span></li></NavLink>
                <NavLink to="/projets" className="navLinkAccueil"><li><img src='images/LogoNom.png'/><span>Programation Web</span></li></NavLink>
                <NavLink to="/a-propos" className="navLinkAccueil"><li><img src='images/LogoNom.png'/><span>À propos</span></li></NavLink>
                <NavLink to="/contact" className="navLinkAccueil"><li><img src='images/LogoNom.png'/><span>Contact</span></li></NavLink>
            </ul>
        </div>
    );
}