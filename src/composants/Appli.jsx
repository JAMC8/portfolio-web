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

  

  return (
    <div className="Appli">
        
          <Switch>

            <Route path="/" exact>
              <Accueil/>
              <MenuAccueil/>
              <EnteteAccueil/>
              <PiedDePageAccueil/>
            </Route>

            <Route path="/projets">
              <PagesSecondaires nomPage={PageProjets}  />              
            </Route>

            <Route path="/a-propos" >
              <PagesSecondaires nomPage={APropos} />
            </Route>

            <Route path="/contact" >
              <PagesSecondaires nomPage={Contact} />
            </Route>

          </Switch>
        
    </div>
  );
}
