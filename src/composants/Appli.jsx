import './scss/Appli.scss';
import {Switch , Route} from 'react-router-dom';
import Accueil from './Accueil';
import PagesSecondaires from './PagesSecondaires';
import PageProjets from './PageProjets';
import APropos from './APropos';
import Contact from './Contact';
import EnteteAccueil from "./EnteteAccueil";
import MenuAccueil from "./MenuAccueil";
import PiedDePageAccueil from "./PiedDePageAccueil";
import React, { useState } from 'react';


export default function Appli(props) {  

  const [categorie, setCategorie] = useState();

  function setJeu()
  {
    setCategorie("Jeu");
  }

  function setWeb()
  {
    setCategorie("Web");
  }

  return (
    <div className="Appli">
        
          <Switch>

            <Route path="/" exact>
              <Accueil/>
              <MenuAccueil setJeu={setJeu} setWeb={setWeb}/>
              <EnteteAccueil/>
              <PiedDePageAccueil/>
            </Route>

            <Route path="/projets">
              <PagesSecondaires nomPage={PageProjets} categorie={categorie} setJeu={setJeu} setWeb={setWeb} />              
            </Route>

            <Route path="/a-propos" >
              <PagesSecondaires nomPage={APropos} categorie="null" setJeu="null" setWeb="null"/>
            </Route>

            <Route path="/contact" >
              <PagesSecondaires nomPage={Contact} categorie="null" setJeu="null" setWeb="null"/>
            </Route>

          </Switch>
        
    </div>
  );
}
