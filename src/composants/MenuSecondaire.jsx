import './scss/MenuSecondaire.scss';
import { Link, NavLink } from 'react-router-dom';


export default function MenuSecondaire(props)
{
    return(
        <>
            <div className="MenuSecondaire">
                <h2 className="nom">Julian Maldonado</h2>
                <ul className="nav">
                    <NavLink to="/" className="navLinkSecondaire" activeClassName="navLinkActive" exact><li><span>Accueil</span></li></NavLink>
                    <NavLink to="/a-propos" className="navLinkSecondaire" activeClassName="navLinkActive"><li><span>À propos</span></li></NavLink>
                    <NavLink to="/contact" className="navLinkSecondaire" activeClassName="navLinkActive"><li><span>Contact</span></li></NavLink>
                </ul>
            </div>
        </>
    );
}