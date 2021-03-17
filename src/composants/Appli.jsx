import './scss/Appli.scss';
import {Switch , Route} from 'react-router-dom';
import Accueil from './Accueil';
import PagesSecondaires from './PagesSecondaires';
import PageListeProjets from './PageListeProjets';
import APropos from './APropos';
import Contact from './Contact';
import EnteteAccueil from "./EnteteAccueil";
import MenuAccueil from "./MenuAccueil";
import PiedDePageAccueil from "./PiedDePageAccueil";
import PageDuProjet from "./PageDuProjet";
import React from 'react';
import tabProjetsJeu from "../data/projetsJeu.json";
import tabProjetsWeb from "../data/projetsWeb.json";



export default function Appli(props) {  


  return (
    <div className="Appli">
        
          <Switch>

            <Route path="/" exact>
              <Accueil/>
              <MenuAccueil/>
              <EnteteAccueil/>
              <PiedDePageAccueil/>
            </Route>

            <Route path="/projets/prog-jeu" exact>
              <PagesSecondaires nomPage={PageListeProjets} tabProjets={tabProjetsJeu} />              
            </Route>

            <Route path="/projets/prog-web" exact>
              <PagesSecondaires nomPage={PageListeProjets} tabProjets={tabProjetsWeb} />              
            </Route>       

            <Route path="/a-propos" >
              <PagesSecondaires nomPage={APropos} />
            </Route>

            <Route path="/contact" >
              <PagesSecondaires nomPage={Contact} />
            </Route>

            <Route path={"/projets/:nomCategorie/:idProjet"} exact>
              <PagesSecondaires  nomPage={PageDuProjet} tabProjetsJeu={tabProjetsJeu} tabProjetsWeb={tabProjetsWeb} />              
            </Route>
        

          </Switch>
        
    </div>
  );
}
