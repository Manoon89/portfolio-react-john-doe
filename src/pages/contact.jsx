import Address from '../components/sglobals/address' ;
import Form from '../components/contact/form' ;
import Header from "../components/header/header" ;
import Footer from "../components/footer/footer" ;
import imgGit from "../assets/icons/github.svg" ;
import imgTwitter from "../assets/icons/twitter.svg" ;
import imgLink from "../assets/icons/linkedin.svg" ;
import iconMap from "../assets/icons/map.svg";
import iconGeo from "../assets/icons/geo-alt.svg";
import iconPhone from "../assets/icons/phone.svg";
import iconMail from "../assets/icons/envelope-at.svg";

export default function ContactMe () {

    return(
        <body>
            <Header title="Contact" description="Pour me contacter en vue d'un entretien ou d'une future collaboration,
            merci de remplir le formulaire de contact."/>
            <main>
                <Form />
                <section>
                    <h3>Mes coordonnées</h3>
                    <h4>John Doe</h4>
                    <Address className="text-dark" imgAddress={<img src={iconMap} alt="icone carte"/>} 
                        imgCity={<img src={iconGeo} alt="icone géolocalisation"/>} 
                        imgTel={<img src={iconPhone} alt="icone smartphone"/>} 
                        imgMail={<img src={iconMail} alt="icone enveloppe"/>}
                    />
                </section>
            </main>
            <Footer imgGitHub={imgGit} imgX={imgTwitter} imgLinkedin={imgLink}/>
        </body>
    );
}