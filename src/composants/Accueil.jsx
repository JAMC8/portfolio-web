import EnteteAccueil from "./EnteteAccueil";
import Menu from "./Menu";
import PiedDePageAccueil from "./PiedDePageAccueil";
import videoArrierePlan from "./../videos/00_VideoPortfolio.mp4"
import './Accueil.scss'; 

export default function Accueil(props)
{
    return(
        <div className="Accueil">
            <video className="videoArrierePlan" autoPlay loop muted>
                <source className="video" src={videoArrierePlan} type='video/mp4' />
            </video>
            <div className="pannel"></div>
            <Menu/>
            <EnteteAccueil/>
            <PiedDePageAccueil/>
        </div>
    );
}