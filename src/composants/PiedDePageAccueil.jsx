import './scss/PiedDePageAccueil.scss';
import logo from './../img/LogoNom.png'

export default function PiedDePageAccueil(props)
{
    return(
        <footer className="PiedDePageAccueil">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="description">
                <div className="texte">Programmeur de Jeux Vidéo.</div>
            </div>
        </footer>
    );
}