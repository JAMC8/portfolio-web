import './scss/MenuSecondaire.scss';

export default function MenuSecondaire(props)
{
    return(
        <>
            <div className="MenuSecondaire">
            <h2 className="nom">Julian Maldonado</h2>
                <ul className="nav">
                    <li><a>Accueil</a></li>
                    <li><a>À Propos</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </>
    );
}