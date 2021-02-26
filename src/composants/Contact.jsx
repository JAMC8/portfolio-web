import './scss/Contact.scss';
import MenuSecondaire from "./MenuSecondaire";
import logo from './../img/LogoNom.png'

export default function Contact(props)
{
    return(
        <div className="foo">
            <MenuSecondaire />
            <div className="ContenuPrincipal">
                <div className="Contact">
                    <h2 className="titrePage">Contact</h2>
                    <div className="info">
                        <div className="courriel">
                            <h3>Adresse courriel</h3>
                            <a href="mailto:juliandresmc@hotmail.com">juliandresmc@hotmail.com</a>
                        </div>
                        <div className="telephone">
                            <h3>Téléphone</h3>
                            <a href="tel:5145016353">(514) 501-6353</a>
                        </div>
                    </div>            
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}