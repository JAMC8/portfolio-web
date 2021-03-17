import './scss/APropos.scss';
import MenuSecondaire from "./MenuSecondaire";

export default function APropos(props)
{
    return(
        <>        
            <div className="APropos">
                <h2 className="titrePage">À propos</h2>
                <div className="textePresentation">
                    <p>Bonjour, je m'appelle <span className="nom">Julian Maldonado</span>,</p>
                    <p>Je suis finissant en Techniques d'Intégration Multimédia au Collège de Maisonneuve. Je suis passionné par la programmation C# et mon objectif est de devenir programmeur de jeux vidéo. Je veux faire la différence dans le milieu du jeu vidéo.</p>
                    <p>Mon principal champ d’intérêt est surtout par la programmation de jouabilité des jeux vidéo mais j'aime aussi la programmation Web back-end.</p>
                    <p>Mon plan d’action après avoir fini mon D.E.C en intégration multimédia c’est d’aller à l’université ETS dans le programme de Génie Logiciel. Pour mon futur, je veux travailler pour des compagnies de jeux vidéos d'haute gamme comme Ubisoft ou EA.</p>
                </div>
                <div className="sectionHabiletes">
                    <h2>Mes habiletés principales</h2>
                    <h3>- Logiciels</h3>
                    <ul className="logiciels">
                        <li>Unity</li>
                    </ul>
                    <h3>- Langages</h3>
                    <ul className="langages">                    
                        <li>C#</li>
                        <li>PHP</li>
                        <li>HTML</li>
                        <li>SASS</li>
                        <li>JS</li>
                    </ul>
                    <h3>- Frameworks</h3>
                    <ul className="frameworks">                    
                        <li>React</li>
                    </ul>
                    <br />
                    <br />
                    <h2>Mes autres habiletés</h2>
                    <h3>- Logiciel</h3>
                    <ul className="logiciels">
                        <li>Illustrator</li>
                        <li>Photoshop</li>
                        <li>After Effects</li>
                        <li>Premier Pro</li>
                    </ul>
                </div>
                <br />
                <br />
                <div className="telechargerCV">
                    <h3>Mon CV:</h3>
                    <button>Téléchrger CV</button>
                    <span>(Pas encore fonctionel)</span>
                </div>
            </div>
        </>
    );
}