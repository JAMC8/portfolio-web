import './scss/PageProjets.scss';
import MenuSecondaire from "./MenuSecondaire";
import Projet from "./Projet";

export default function PageProjets(props)
{
    return(
        <>
            <div>
                <MenuSecondaire />
                <div className="ContenuPrincipal">
                    <div className="PageProjets">
                        <div className="nav">
                            <h2>Programmation de jeux</h2>
                            <span>/</span>
                            <h3>Prog. Web</h3>
                        </div>
                        <ul>
                            <Projet/>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}