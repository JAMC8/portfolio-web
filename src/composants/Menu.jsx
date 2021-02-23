import './Menu.scss';

export default function Menu(props)
{
    return(
        <div className="Menu">
            <ul className="nav">
                <li><img src='images-logo/LogoNom.png'/><a>Programation de Jeux</a></li>
                <li><img src='images-logo/LogoNom.png'/><a>Programation Web</a></li>
                <li><img src='images-logo/LogoNom.png'/><a>À Propos</a></li>
                <li><img src='images-logo/LogoNom.png'/><a>Contact</a></li>
            </ul>
        </div>
    );
}