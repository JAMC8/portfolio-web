import './Menu.scss';
import Img from './../images/LogoNom.png';

export default function Menu(props)
{
    return(
        <div className="Menu">
            <ul className="nav">
                <li><img src={Img}/><a>Programation de Jeux</a></li>
                <li><img src={Img}/><a>Programation Web</a></li>
                <li><img src={Img}/><a>À Propos</a></li>
                <li><img src={Img}/><a>Contact</a></li>
            </ul>
        </div>
    );
}