import EnteteAccueil from "./EnteteAccueil";
import Menu from "./Menu";
import PiedDePageAccueil from "./PiedDePageAccueil";

export default function Accueil(props)
{
    return(
        <div className="Accueil">
            <EnteteAccueil/>
            <Menu/>
            <PiedDePageAccueil/>
        </div>
    );
}