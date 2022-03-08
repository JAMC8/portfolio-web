import './scss/PageListeProjets.scss';
import Projet from "./Projet";
import {NavLink, useRouteMatch} from 'react-router-dom';


export default function PageListeProjets({infoPage, categorie})
{
    let{url} = useRouteMatch();

    let tableauProjets = Object.values(infoPage.tableauProjets)

    tableauProjets = tableauProjets.sort((projetA, projetB) => projetB.annee - projetA.annee);

    return(
        <>     
            <div className="PageListeProjets">                        
                <div className="nav">
                    <div className="btns">
                        <h2>{infoPage.titrePage}</h2>
                        <span>/</span>
                        <NavLink to={infoPage.urlOption}><h3>{infoPage.nomOption}</h3></NavLink>
                    </div>
                </div>
                <div className="projets">
                    <ul>
                        {tableauProjets.map( projet => <NavLink to={url + "/"+ categorie + "_" + projet.id}  key={projet.id} exact><Projet {...projet}  /></NavLink>)}  
            
                    </ul>
                </div>    
   
            </div>            
        </>            
    );
}