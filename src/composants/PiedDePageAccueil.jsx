import './PiedDePageAccueil.scss';

export default function PiedDePageAccueil(props)
{
    return(
        <footer className="PiedDePageAccueil">
            <div className="logo">
                <img src='images-logo/LogoNom.png'/>
            </div>
            <div className="description">
                <div className="texte">Programmeur de Jeux Vidéo.</div>
            </div>
        </footer>
    );
}