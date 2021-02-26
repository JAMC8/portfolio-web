import './scss/PageProjets.scss';
import MenuSecondaire from "./MenuSecondaire";
import Projet from "./Projet";
import tabProjets from "./../data/projets.json";

export default function PageProjets(props)
{
    let projetsParAnnee = tabProjets.sort((projetA, projetB) => projetB.annee - projetA.annee)
    
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
                            {projetsParAnnee.map( projet => 
                                <Projet nom={projet.nom} annee={projet.annee} images={projet.images} key={projet.id} /> 
                            )}  
                
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}