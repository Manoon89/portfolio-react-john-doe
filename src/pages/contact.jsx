import Address from '../components/sglobals/address' ;
import Button from '../components/sglobals/button' ;
import Form from '../components/contact/form' ;
import Header from "../components/header/header" ;
import Footer from "../components/footer/footer" ;
import imgGit from "../assets/images/github.svg" ;
import imgTwitter from "../assets/images/twitter.svg" ;
import imgLink from "../assets/images/linkedin.svg" ;

export default function ContactMe () {

    return(
        <body>
            <Header title="Contact" description="Pour me contacter en vue d'un entretien ou d'une future collaboration,
            merci de remplir le formulaire de contact."/>
            <Footer imgGitHub={imgGit} imgX={imgTwitter} imgLinkedin={imgLink}/>
        </body>
    );
}