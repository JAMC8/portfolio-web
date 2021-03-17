import './scss/Contact.scss';
import logo from './../img/LogoNom.png'

export default function Contact(props)
{
    return(        
        <div className="Contact">
            <div className="contenu">

                <div className="logoHaut">
                    <img src={logo} alt="" />
                </div>

                <div className="texte">
                    <h2 className="titrePage">Contact</h2>
                    <div className="info">
                        <div className="courriel">
                            <h3>Adresse courriel</h3>
                            <a href="mailto:juliandresmc@hotmail.com">juliandresmc@hotmail.com</a>
                        </div>
                        <div className="telephone">
                            <h3>Téléphone</h3>
                            <a>(514) ***-****</a>
                        </div>
                    </div>            
                </div>

                <div className="logoBas">
                    <img src={logo} alt="" />
                </div>
                
            </div>
        </div>
    );
}