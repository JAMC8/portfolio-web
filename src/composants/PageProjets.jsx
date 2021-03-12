import './scss/PageProjets.scss';
import Projet from "./Projet";
import tabProjetsJeu from "./../data/projetsJeu.json";
import tabProjetsWeb from "./../data/projetsWeb.json";
import {Switch, NavLink, useRouteMatch, Route} from 'react-router-dom';

export default function PageProjets(props)
{
    
    let tabParAnneeJeu = tabProjetsJeu.sort((projetA, projetB) => projetB.annee - projetA.annee);
    let tabParAnneeWeb = tabProjetsWeb.sort((projetA, projetB) => projetB.annee - projetA.annee);
    
    let{path, url} = useRouteMatch();


    return(
        <>     
            <div className="PageProjets">
                        
                
                <Switch>

                    <Route path={path + "/prog-jeu"}>
                        <div className="nav">
                            <div className="btns">
                                <h2>Programmation de Jeux</h2>
                                <span>/</span>
                                <NavLink to={url + "/prog-web"}><h3>Prog. Web</h3></NavLink>
                            </div>
                        </div>
                        <div className="projets">
                            <ul>
                                {tabParAnneeJeu.map( projet => 
                                    <Projet nom={projet.nom} annee={projet.annee} images={projet.images} key={projet.id} /> 
                                )}  
                    
                            </ul>
                        </div>
                    </Route>

                    <Route path={path + "/prog-web"}>
                        <div className="nav">
                            <div className="btns">
                                <h2>Programmation Web</h2>
                                <span>/</span>
                                <NavLink to={url + "/prog-jeu"}><h3>Prog. Jeu</h3></NavLink>
                            </div>
                        </div>
                        <div className="projets">
                            <ul>
                                {tabParAnneeWeb.map( projet => 
                                    <Projet nom={projet.nom} annee={projet.annee} images={projet.images} key={projet.id} /> 
                                )}  
                    
                            </ul>
                        </div>
                    </Route>                 

                </Switch>
            </div>
        </>

            
    );
}