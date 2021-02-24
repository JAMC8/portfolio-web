import './scss/Appli.scss';
import {Switch , Route} from 'react-router-dom';
import Accueil from './Accueil';
import PageProjets from './PageProjets';
import APropos from './APropos';
import Contact from './Contact';

export default function Appli() {
  return (
    <div className="Appli">
        
          <Switch>

            <Route path="/" exact>
              <Accueil/>
            </Route>

            <Route path="/projets" >
              <PageProjets/>
            </Route>

            <Route path="/a-propos" >
              <APropos/>
            </Route>

            <Route path="/contact" >
              <Contact/>
            </Route>

          </Switch>
        
    </div>
  );
}
