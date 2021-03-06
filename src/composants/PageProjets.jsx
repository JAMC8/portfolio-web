import './scss/PageProjets.scss';
import Projet from "./Projet";
import tabProjetsJeu from "./../data/projetsJeu.json";
import tabProjetsWeb from "./../data/projetsWeb.json";
import {Switch, Link, NavLink, useRouteMatch, Route} from 'react-router-dom';

export default function PageProjets({categorie, setJeu ,setWeb})
{
    let projetsParAnnee = [];

    let{path, url} = useRouteMatch();

    let setCategorie = null;
    
    let titreCategorie1 = "";
    let titreCategorie2 = "";
    let pathCategorie = "";
    let categorieAChanger = "";

    switch (categorie)
    {
        default: case "Jeu": 
            titreCategorie1 = "Programmation de jeux"; 
            titreCategorie2 = "Prog. Web";
            pathCategorie = "prog-jeu";
            categorieAChanger = "prog-web";
            projetsParAnnee = tabProjetsJeu.sort((projetA, projetB) => projetB.annee - projetA.annee);
            //path = path + "/" + nomCategorie2;
            break;

        case "Web": 
            titreCategorie1 = "Programmation Web"; 
            titreCategorie2 = "Prog. Jeu";
            pathCategorie = "prog-web";
            categorieAChanger = "prog-jeu";
            projetsParAnnee = tabProjetsWeb.sort((projetA, projetB) => projetB.annee - projetA.annee);
            //path = path + "/" + nomCategorie2;
            break;
    }

    switch (categorieAChanger) {
        case "prog-jeu":
            setCategorie = setJeu;
            break;
    
        case "prog-web":
            setCategorie = setWeb;
            break;
    }

    return(
        <>     
            <div className="PageProjets">
                <div className="nav">
                    <h2>{titreCategorie1}</h2>
                    <span>/</span>
                    <NavLink to={url + "/" + categorieAChanger} onClick={setCategorie}><h3>{titreCategorie2}</h3></NavLink>
                </div>        
                
                <Switch>

                    <Route path={path} exact>                        
                        <div className="projets">
                            <ul>
                                {projetsParAnnee.map( projet => 
                                    <Projet nom={projet.nom} annee={projet.annee} images={projet.images} key={projet.id} /> 
                                )}  
                    
                            </ul>
                        </div>
                    </Route>

                    <Route path={path + "/" + pathCategorie}>
                        <div className="projets">
                            <ul>
                                {projetsParAnnee.map( projet => 
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