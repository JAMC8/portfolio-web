import EnteteAccueil from "./EnteteAccueil";
import MenuAccueil from "./MenuAccueil";
import PiedDePageAccueil from "./PiedDePageAccueil";
import videoArrierePlan from "./../videos/00_VideoPortfolio.mp4";
import './scss/Accueil.scss'; 


export default function Accueil(props)
{
    return(
        <div className="Accueil">
            <video className="videoArrierePlan" autoPlay loop muted>
                <source className="video" src={videoArrierePlan} type='video/mp4' />
            </video>
            <div className="pannel"></div>
            <MenuAccueil/>
            <EnteteAccueil/>
            <PiedDePageAccueil/>
        </div>
    );
}