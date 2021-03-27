import './scss/APropos.scss';
import {DiUnitySmall, DiSass, DiJavascript1, DiReact} from 'react-icons/di';
import {SiCsharp, SiPhp, SiAdobeillustrator, SiAdobephotoshop, SiAdobeaftereffects, SiAdobepremiere} from 'react-icons/si';
import {TiHtml5} from 'react-icons/ti';

export default function APropos(props)
{
    return(
        <>        
            <div className="APropos">
                <h2 className="titrePage">À propos</h2>
                
                <div className="textePresentation">
                    <p>Bonjour, je m'appelle <span className="nom">Julian Maldonado</span>,</p>
                    <p>Je suis finissant en Techniques d'Intégration Multimédia au Collège de Maisonneuve. Je suis passionné par la programmation C# et mon objectif est de devenir programmeur de jeux vidéo. Je veux faire la différence dans le milieu du jeu vidéo.</p>
                    <p>Mon principal champ d’intérêt est surtout la programmation de jouabilité des jeux vidéo mais j'aime aussi la programmation Web back-end.</p>
                    <p>Mon plan d’action après avoir fini mon D.E.C en intégration multimédia c’est d’aller à l’université ETS dans le programme de Génie Logiciel. Pour mon futur, je veux travailler pour des compagnies de jeux vidéos d'haute gamme comme Ubisoft ou EA.</p>
                </div>

                <div className="sectionHabiletes">
                    <h2>Mes habiletés principales</h2>
                    <div className="categorie">
                        <h3 style={{top:"120px"}}>Logiciels</h3>
                        <ul className="logiciels">
                            <li>
                                <div className="divLogo"><DiUnitySmall style={{paddingRight: "5.5px"}} size='50px'/></div>
                                <span className="nom">Unity</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="categorie">
                        <h3 style={{top:"120px"}} >Langages</h3>
                        <ul className="langages">                    
                            <li>
                                <div className="divLogo"><SiCsharp /></div>
                                <span className="nom">C#</span>
                            </li>
                            <li>
                                <div className="divLogo"><SiPhp size='50px'/></div>
                                <span className="nom">PHP</span>
                            </li>
                            <li>
                                <div className="divLogo"><TiHtml5 size='50px'/></div>
                                <span className="nom">HTML</span>
                            </li>
                            <li>
                                <div className="divLogo"><DiSass size='50px'/></div>
                                <span className="nom">SASS</span>
                            </li>
                            <li>
                                <div className="divLogo"><DiJavascript1 size='50px'/></div>
                                <span className="nom">JavaScript</span>
                            </li>
                        </ul>
                    </div>

                    <div className="categorie">
                        <h3 style={{top:"135px"}}>Frameworks</h3>
                        <ul className="frameworks">                    
                            <li>
                                <div className="divLogo"><DiReact size='50px'/></div>                            
                                <span className="nom">React</span>
                            </li>
                        </ul>
                    </div>

                    <br />
                    <br />

                    <h2>Mes autres habiletés</h2>

                    <div className="categorie">
                        <h3 style={{top:"129px"}}>Logiciels</h3>
                        <ul className="logiciels">
                            <li>
                                <div className="divLogo"><SiAdobeillustrator/></div>
                                <span className="nom">Illustrator</span>
                            </li>
                            <li>
                                <div className="divLogo"><SiAdobephotoshop/></div>
                                <span className="nom">Photoshop</span>
                            </li>
                            <li>
                                <div className="divLogo"><SiAdobeaftereffects/></div>
                                <span className="nom">After Effects</span>
                            </li>
                            <li>
                                <div className="divLogo"><SiAdobepremiere/></div>
                                <span className="nom">Premier Pro</span>
                            </li>
                        </ul>
                    </div>

                </div>
                <br />
                <br />
            </div>
        </>
    );
}