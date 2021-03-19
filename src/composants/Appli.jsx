import './scss/Appli.scss';
import {Switch , Route, NavLink} from 'react-router-dom';
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

  const annee = new Date().getFullYear();


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
              <footer className="pied-de-page">&copy; {annee} Julian Maldonado</footer>            
            </Route>

            <Route path="/projets/prog-web" exact>
              <PagesSecondaires nomPage={PageListeProjets} tabProjets={tabProjetsWeb} />
              <footer className="pied-de-page">&copy; {annee} Julian Maldonado</footer>             
            </Route>       

            <Route path="/a-propos" >
              <PagesSecondaires nomPage={APropos} />
              <footer className="pied-de-page">&copy; {annee} Julian Maldonado</footer>
            </Route>

            <Route path="/contact" >
              <PagesSecondaires nomPage={Contact} />
              <footer className="pied-de-page">&copy; {annee} Julian Maldonado</footer>
            </Route>

            <Route path={"/projets/:nomCategorie/:idProjet"} exact>
              <PagesSecondaires  nomPage={PageDuProjet} tabProjetsJeu={tabProjetsJeu} tabProjetsWeb={tabProjetsWeb} />
              <footer className="pied-de-page"><NavLink to="/">&copy; {annee} Julian Maldonado</NavLink></footer>            
            </Route>
        

          </Switch>
        
    </div>
  );
}
