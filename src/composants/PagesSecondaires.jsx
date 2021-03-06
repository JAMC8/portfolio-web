import './scss/PagesSecondaires.scss';
import MenuSecondaire from './MenuSecondaire';


export default function PagesSecondaires({nomPage, categorie, setJeu ,setWeb})
{
    const Contenu = nomPage;    

    return(
        <div className="PagesSecondaires">
            <MenuSecondaire/>
            <section className="contenuPrincipal">
                <Contenu categorie={categorie} setJeu={setJeu} setWeb={setWeb}/>
            </section>
        </div>
        
    );
}