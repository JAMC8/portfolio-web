import { Link, NavLink, useRouteMatch} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './scss/BtnBurger.scss';
import './scss/MenuSecondaire.scss'; 


export default function MenuSecondaire(props)
{
    let{path, url} = useRouteMatch();
    
    return(
        <>
            <div className="MenuSecondaire">
                <NavLink to="/" className="nom" exact><h2>Julian Maldonado</h2></NavLink>
                <div className="grandsEcrans">
                    <ul className="nav">
                        <NavLink to="/" className="navLinkSecondaire" activeClassName="navLinkActive" exact><li><span>Accueil</span></li></NavLink>
                        <NavLink to="/projets/prog-jeu" className="navLinkSecondaire" activeClassName="navLinkActive"><li><span>Projets</span></li></NavLink>
                        <NavLink to="/a-propos" className="navLinkSecondaire" activeClassName="navLinkActive"><li><span>À propos</span></li></NavLink>
                        <NavLink to="/contact" className="navLinkSecondaire" activeClassName="navLinkActive"><li><span>Contact</span></li></NavLink>
                    </ul>
                </div>
                <div className="petitsEcrans">
                    <Menu className="nav" right width={'100%'} >
                        <NavLink to="/" className="navLinkSecondaire" activeClassName="navLinkActive" exact><li><span>Accueil</span></li></NavLink>
                        <NavLink to="/projets/prog-jeu" className="navLinkSecondaire" activeClassName="navLinkActive"><li><span>Projets</span></li></NavLink>
                        <NavLink to="/a-propos" className="navLinkSecondaire" activeClassName="navLinkActive"><li><span>À propos</span></li></NavLink>
                        <NavLink to="/contact" className="navLinkSecondaire" activeClassName="navLinkActive"><li><span>Contact</span></li></NavLink>
                    </Menu>
                </div>
            </div>
        </>
    );
}