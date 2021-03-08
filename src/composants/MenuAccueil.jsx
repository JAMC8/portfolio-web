import './scss/BtnBurger.scss';
import './scss/MenuAccueil.scss';
import { Link, NavLink } from 'react-router-dom';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LanguageIcon from '@material-ui/icons/Language';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import { slide as Menu } from 'react-burger-menu'


export default function MenuAccueil({setJeu, setWeb})
{
    
    
    return(
        <div className="MenuAccueil">
            <div className="grandsEcrans">
                <ul className="nav ">
                    <NavLink to="/projets/prog-jeu" className="navLinkAccueil" ><li><SportsEsportsIcon className="icon"/><span>Programation de Jeux</span></li></NavLink>
                    <NavLink to="/projets/prog-web" className="navLinkAccueil" ><li><LanguageIcon className="icon"/><span>Programation Web</span></li></NavLink>
                    <NavLink to="/a-propos" className="navLinkAccueil"><li><InfoIcon className="icon"/><span>À propos</span></li></NavLink>
                    <NavLink to="/contact" className="navLinkAccueil"><li><ContactsIcon className="icon"/><span>Contact</span></li></NavLink>
                </ul>
            </div>
            <div className="petitsEcrans">
                <Menu className="nav " right width={'100%'} opacity={1}>
                    <NavLink to="/projets/prog-jeu" className="navLinkAccueil" ><li><SportsEsportsIcon className="icon"/><span>Programation de Jeux</span></li></NavLink>
                    <NavLink to="/projets/prog-web" className="navLinkAccueil" ><li><LanguageIcon className="icon"/><span>Programation Web</span></li></NavLink>
                    <NavLink to="/a-propos" className="navLinkAccueil"><li><InfoIcon className="icon"/><span>À propos</span></li></NavLink>
                    <NavLink to="/contact" className="navLinkAccueil"><li><ContactsIcon className="icon"/><span>Contact</span></li></NavLink>
                </Menu>
            </div>
        </div>
    );
}