import { useParams } from 'react-router';
import {DiUnitySmall, DiSass, DiJavascript1, DiReact, DiCss3} from 'react-icons/di';
import {SiCsharp, SiPhp, SiAdobeillustrator, SiFirebase} from 'react-icons/si';
import {TiHtml5} from 'react-icons/ti';
import {NavLink, useHistory} from 'react-router-dom';


import './scss/PageDuProjet.scss';

export default function PageDuProjet({tabProjetsJeu, tabProjetsWeb})
{
    const {idProjet, nomCategorie} = useParams();
    let id = idProjet.split("_").pop();
    let tableauProjets = Object.values(tabProjetsJeu)
    let sectionVideos = false;
    let history = useHistory();
    switch(nomCategorie)
    {
        case "prog-jeu":
            tableauProjets = Object.values(tabProjetsJeu);
            tableauProjets = tableauProjets[id-1];
            break;

        case "prog-web":
            tableauProjets = Object.values(tabProjetsWeb);
            tableauProjets = tableauProjets[id-1];
            break;
    }
    
    if(tableauProjets.videos.length != 0)
    {
        sectionVideos = true;
    }

    // Afficher image
    function afficherPhoto(img)
    {
        var modal = document.getElementById("modal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var modalImg = document.getElementById("img");
        var captionText = document.getElementById("caption");
       
        modal.style.display = "flex";
        modalImg.src = "/images-projets/" + img + '.png';
    }

    // Fermer l'image après l'avoir affiché
    function fermerModal()
    {
        var modal = document.getElementById("modal");
        modal.style.display = "none";
    }

    // Montrer logo de la technologie utilisée
    function montrerLogo(techno)
    {
        switch(techno)
        {
            case "Unity": return <DiUnitySmall size="50px" style={{paddingRight: "5.5px"}}/>;
            case "C#": return <SiCsharp/>; 
            case "PHP": return <SiPhp/>;
            case "HTML": return <TiHtml5/>;
            case "SASS": return <DiSass/>;
            case "JavaScript": return <DiJavascript1/>;
            case "React": return <DiReact/>;
            case "Illustrator": return <SiAdobeillustrator/>;
            case "CSS": return <DiCss3/>;
            case "Firebase": return <SiFirebase/>;
        }
    }   

    return(
        <>
        <div className="PageDuProjet">
        <button onClick={history.goBack} className="btn-retour">&#60; Projets</button>

            <h2 className="titre-projet">{tableauProjets.nom}</h2>
            
            <div className="haut-de-page">
                <div className="description">
                    <p >{tableauProjets.desc}</p>
                </div>
                <div className="img-haut-page">
                    <img  src={"/images-projets/" + tableauProjets.images[0] + '.png'} alt="" />
                </div>
            </div>

            <div className="medias">

                <div className="images">
                    <h3 className="">Images</h3>
                    <ul className="liste-imgs">
                        {
                            tableauProjets.images.map( img => 
                            <img src={"/images-projets/" + img + '.png'} alt="" key={++id} onClick={() => afficherPhoto(img)} />
                            )                    
                        }
                    </ul>
                    <div className="modal" id="modal">
                        <span className="close" onClick={fermerModal} >&times;</span>
                        <img className="modal-content" id="img" src=""/>
                    </div>
                </div>

                {
                sectionVideos ?

                <div className="videos">
                    <h3 className="">Videos</h3>
                    <ul className="liste-vids">
                        {
                            tableauProjets.videos.map( vid => <video src={"/videos-projets/" + vid + '.mp4'} alt="" key={++id} controls />)                    
                        }
                    </ul>
                </div>
                :
                <br/> 
                }
            </div>

            <div className="tecnologies">
                <h3 className="">Technologies</h3>
                <ul className="liste-technos">
                    {
                        tableauProjets.technos.map( techno => <li alt="" key={++id} ><div className="divLogo">{montrerLogo(techno)}</div><span className="nom">{techno}</span></li>)                    
                    }
                </ul>
            </div>

        </div>
        </>
    );
}