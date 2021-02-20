import './Menu.scss';


export default function Menu(props)
{
    console.log();

    return(
        <div className="Menu">
            <ul className="nav">
                <li><img src="images/_LogoNom.png"/><a>Programation de Jeux</a></li>
                <li><img src=""/><a>Programation Web</a></li>
                <li><img src=""/><a>À Propos</a></li>
                <li><img src=""/><a>Contact</a></li>
            </ul>
        </div>
    );
}