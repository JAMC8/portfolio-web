import './scss/Contact.scss';
import MenuSecondaire from "./MenuSecondaire";

export default function Contact(props)
{
    return(
        <div>
            <MenuSecondaire />
            <div className="ContenuPrincipal">
                <div className="Contact">
                    <div className="logo">
                        <img src='images-logo/LogoNom.png'/>
                    </div>
                    <h2 className="titrePage">Contact</h2>
                    <div>
                        <h3>Adresse courriel</h3>
                        <a href="mailto:juliandresmc@hotmail.com">juliandresmc@hotmail.com</a>
                    </div>
                    <div>
                        <h3>Téléphone</h3>
                        <a href="tel:5145016353">(514) 501-6353</a>
                        <span>Cliquez pour appeler</span>
                    </div>            
                </div>
            </div>
        </div>
    );
}