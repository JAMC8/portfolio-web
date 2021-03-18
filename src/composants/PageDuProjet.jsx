import { useParams } from 'react-router';

import './scss/PageDuProjet.scss';

export default function PageDuProjet({tabProjetsJeu, tabProjetsWeb})
{
    const {idProjet, nomCategorie} = useParams();
    let id = idProjet.split("_").pop();
    let tableauProjets = Object.values(tabProjetsJeu)
    let sectionVideos = false;
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

    function afficherPhoto(img)
    {
        var modal = document.getElementById("modal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var modalImg = document.getElementById("img");
        var captionText = document.getElementById("caption");
       
        modal.style.display = "flex";
        modalImg.src = "/images-projets/" + img + '.png';
    }

    function fermerModal()
    {
        var modal = document.getElementById("modal");
        modal.style.display = "none";
    }


    return(
        <>
        <div className="PageDuProjet">
            <h2 className="titreProjet">{tableauProjets.nom}</h2>
            <div className="hautDePage">
                <div className="description">
                    <p >{tableauProjets.desc}</p>
                </div>
                <div className="imgHautPage">
                    <img  src={"/images-projets/" + tableauProjets.images[0] + '.png'} alt="" />
                </div>
            </div>

            <div className="medias">
                <div className="images">
                    <h3 className="">Images</h3>
                    <ul className="listeImgs">
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
                    <ul className="listeVids">
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
                <h3 className="">Tecnologies</h3>
                <ul className="listeOutils">
                    {
                        tableauProjets.outils.map( outil => <li alt="" key={++id}>{outil}</li>)                    
                    }
                </ul>
            </div>
        </div>
        </>
    );
}