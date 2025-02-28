import Address from '../components/sglobals/address' ;
import Button from '../components/sglobals/button' ;
import Form from '../components/contact/form' ;
import Header from "../components/header/header" ;
import Footer from "../components/footer/footer" ;

export default function ContactMe () {

    return(
        <body>
            <Header title="Contact" description="Pour me contacter en vue d'un entretien ou d'une future collaboration,
            merci de remplir le formulaire de contact."/>
            <Footer />
        </body>
    );
}