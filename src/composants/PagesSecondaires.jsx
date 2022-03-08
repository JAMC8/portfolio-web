import './scss/PagesSecondaires.scss';
import MenuSecondaire from './MenuSecondaire';
import {useRouteMatch} from 'react-router-dom';



export default function PagesSecondaires({nomPage, tabProjets, tabProjetsJeu, tabProjetsWeb})
{
    const Contenu = nomPage; 
    let {path} = useRouteMatch();
    const infoPage = {titrePage: "", nomOption: "", urlOption: "", tableauProjets: tabProjets};
    let categorie = "";
    
    switch(path)
    {
        case "/projets/prog-jeu": 
            categorie = "jeu";
            infoPage.titrePage = "Programmation de Jeux";
            infoPage.nomOption = "Prog. Web";
            infoPage.urlOption = "/projets/prog-web";
            break;

        case "/projets/prog-web":
            categorie = "web";
            infoPage.titrePage = "Programmation Web";
            infoPage.nomOption = "Prog. Jeu";
            infoPage.urlOption = "/projets/prog-jeu";
            break;

        default:   
            
            break;
    }

    return(
        <div className="PagesSecondaires">
            <MenuSecondaire/>
            <section className="contenuPrincipal">
                <Contenu infoPage={infoPage} categorie={categorie} tabProjetsJeu={tabProjetsJeu} tabProjetsWeb={tabProjetsWeb}/>
            </section>
            
        </div>
        
    );
}