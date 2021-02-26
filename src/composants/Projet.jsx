import './scss/Projet.scss';

export default function Projet({nom, annee, images})
{

    console.log(images);
    return(
        <li className="Projet">
            <img sizes="404px" src={"images-projets/" + images[0] + '.png'} alt="" />
            <div className="info">
                <p className="nom">{nom}</p>
                <p className="annee">{annee}</p>
            </div>
        </li>
    );
}