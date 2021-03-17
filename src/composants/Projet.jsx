import './scss/Projet.scss';


export default function Projet({nom, annee, images})
{    
    return(             
        <li className="Projet" >
            <img src={"/images-projets/" + images[0] + '.png'} alt="" />
            <div className="panelInfo">
                <div className="info">
                    <p className="nom">{nom}</p>
                    <p className="annee">{annee}</p>
                </div>
            </div>
        </li>            
    );
}