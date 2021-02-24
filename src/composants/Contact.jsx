import './scss/Contact.scss';
import MenuSecondaire from "./MenuSecondaire";

export default function Contact(props)
{
    return(
        <div>
            <MenuSecondaire />
            <div className="ContenuPrincipal">
                <div className="Contact">
                    <img className="logo"/>
                    <h2 className="titrePage">Contact</h2>
                    
                    
                </div>
            </div>
        </div>
    );
}