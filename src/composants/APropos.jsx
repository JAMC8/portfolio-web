import './scss/APropos.scss';
import MenuSecondaire from "./MenuSecondaire";

export default function APropos(props)
{
    return(
        <>
        <div>
            <MenuSecondaire />
            <div className="ContenuPrincipal">
                <div className="APropos">
                    <h2 className="titrePage">À propos</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum excepturi eligendi quo necessitatibus assumenda nam dolores, sunt dolor dicta expedita nobis sed quae autem aut harum ratione quibusdam ipsum aliquid.</p>
                    <p>Similique possimus odio quam ad, deserunt iure necessitatibus libero distinctio facilis fugit quia eius, doloremque quo veritatis! Eaque vero numquam quibusdam molestiae, unde delectus architecto deserunt autem distinctio nemo qui!</p>
                    <p>Unde laboriosam odit quisquam, est porro aut asperiores modi nobis suscipit ab pariatur! Modi sunt enim voluptates quam fuga deleniti voluptatibus, libero at quasi animi! Reprehenderit mollitia libero ducimus saepe.</p>
                    <div className="sectionHabiletes">
                        <h2>Mes habiletés</h2>
                        <h3>- Logiciel</h3>
                        <ul className="logiciels">
                            <li>Unity</li>
                        </ul>
                        <h3>- Langages</h3>
                        <ul className="langages">                    
                            <li>C#</li>
                            <li>PHP</li>
                            <li>HTML</li>
                            <li>SCSS</li>
                            <li>JS</li>
                        </ul>
                        <h3>- Framework</h3>
                        <ul className="frameworks">                    
                            <li>React</li>
                        </ul>
                    </div>
                    <div className="telechargerCV">
                        <h3>Mon CV:</h3>
                        <button>Téléchrger CV</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}