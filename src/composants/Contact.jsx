import './scss/Contact.scss';
import logo from './../img/LogoNom.png';
import { SiBehance, SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact(props)
{
    return(        
        <div className="Contact">
            <div className="contenu">

                <div className="logo-haut">
                    <img src={logo} alt="" />

                    <div className="reseaux-sociaux-haut">
                        <a href="https://www.linkedin.com/in/julian-maldonado-a1112a182/" target="_blank"><FaLinkedinIn/></a>
                        <a href="https://www.behance.net/julianmaldonado1" target="_blank"><SiBehance/></a>
                        <a href="https://github.com/JAMC8" target="_blank"><SiGithub/></a>
                    </div>

                </div>
                

                <div className="texte">
                    <h2 className="titre-page">Contact</h2>
                    <div className="info">
                        <div className="courriel">
                            <h3>Adresse courriel</h3>
                            <a href="mailto:juliandresmc@hotmail.com">juliandresmc@hotmail.com</a>
                            <h3>Adresse courriel ÉTS</h3>
                            <a href="mailto:julian-andres.maldonado.1@ens.etsmtl.ca">julian-andres.maldonado.1@ens.etsmtl.ca</a>
                        </div>
                        <div className="telephone">
                            <h3>Téléphone</h3>
                            <a>(514) ***-****</a>
                        </div>
                    </div>            
                </div>


                <div className="logo-bas">
                <div className="reseaux-sociaux-bas">
                    <a href="https://www.linkedin.com/in/julian-maldonado-a1112a182/" target="_blank"><FaLinkedinIn/></a>
                    <a href="https://www.behance.net/julianmaldonado1" target="_blank"><SiBehance/></a>
                    <a href="https://github.com/JAMC8" target="_blank"><SiGithub/></a>
                </div>
                    <img src={logo} alt="" />
                </div>

                
            </div>
        </div>
    );
}