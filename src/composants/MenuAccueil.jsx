import './scss/MenuAccueil.scss';
import { Link, NavLink } from 'react-router-dom';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LanguageIcon from '@material-ui/icons/Language';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';


export default function MenuAccueil({setJeu, setWeb})
{
    
    
    return(
        <div className="MenuAccueil">
            <ul className="nav">
                <NavLink to="/projets" className="navLinkAccueil" onClick={setJeu}><li><SportsEsportsIcon className="icon"/><span>Programation de Jeux</span></li></NavLink>
                <NavLink to="/projets" className="navLinkAccueil" onClick={setWeb}><li><LanguageIcon className="icon"/><span>Programation Web</span></li></NavLink>
                <NavLink to="/a-propos" className="navLinkAccueil"><li><InfoIcon className="icon"/><span>À propos</span></li></NavLink>
                <NavLink to="/contact" className="navLinkAccueil"><li><ContactsIcon className="icon"/><span>Contact</span></li></NavLink>
            </ul>
        </div>
    );
}