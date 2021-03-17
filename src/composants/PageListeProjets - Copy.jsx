import './scss/PageListeProjets.scss';
import Projet from "./Projet";
import PageDuProjet from "./PageDuProjet";
import tabProjetsJeu from "../data/projetsJeu.json";
import tabProjetsWeb from "../data/projetsWeb.json";
import {Switch, NavLink, useRouteMatch, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';


export default function PageListeProjets(props)
{
    
    let tabParAnneeJeu = tabProjetsJeu.sort((projetA, projetB) => projetB.annee - projetA.annee);
    let tabParAnneeWeb = tabProjetsWeb.sort((projetA, projetB) => projetB.annee - projetA.annee);
    
    let{path, url} = useRouteMatch();
    
    /*let urlProjet = urlProjet = projet.nom.toLocaleLowerCase().replace(" : ", "-").replace(/\s/g, "-").replace("à", "a"),;*/

    const idProjet = useState();
    const [id, setId] = idProjet;

    console.log("path: " + path + " url: " + url);

    function SetIdProjet(testID)
    {
        setId(testID);
        //console.log(path);
    }

    return(
        <>     
            <div className="PageListeProjets">
                        
                
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
                                {tabParAnneeJeu.map( projet => <Projet {...projet} key={projet.id} onClick={SetIdProjet} /> )}  
                    
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
                                {tabParAnneeWeb.map( projet => <Projet {...projet} key={projet.id} onClick={SetIdProjet} /> )}  
                    
                            </ul>
                        </div>
                    </Route>
                                    

                </Switch>
            </div>
        </>

            
    );
}