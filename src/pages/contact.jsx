import Address from '../components/sglobals/address' ;
import Form from '../components/contact/form' ;
import Header from "../components/header/header" ;
import Footer from "../components/footer/footer" ;
import iconMap from "../assets/icons/map.svg";
import iconGeo from "../assets/icons/geo-alt.svg";
import iconPhone from "../assets/icons/phone.svg";
import iconMail from "../assets/icons/envelope-at.svg";

export default function ContactMe () {

    return(
        <div>
            <Header title="Contact" description="Pour me contacter en vue d'un entretien ou d'une future collaboration,
            merci de remplir le formulaire de contact." classH1="text-center pt-4"
            line={<div className="mx-auto my-3 border-top border-4 border-primary mb-4" style={{width: "30%"}}></div>}
            />
            <main className="w-md-75 shadow p-4 mb-5 bg-body-tertiary rounded container-fluid">
                <div className="row">
                    <div className="col-md-6 m-0 p-2">
                        <Form />
                    </div>
                    <div className="col-md-6 m-0 p-2">
                        <section>
                            <h2 className="contact-title border-bottom border-primary pb-4 mb-4 border-3">Mes coordonnées</h2>
                            <h3 className="pt-2">John Doe</h3>
                            <Address className="text-dark" imgAddress={<img src={iconMap} alt="icone carte"/>} 
                                imgCity={<img src={iconGeo} alt="icone géolocalisation"/>} 
                                imgTel={<img src={iconPhone} alt="icone smartphone"/>} 
                                imgMail={<img src={iconMail} alt="icone enveloppe"/>}
                            />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6618.291437050477!2d4.797268744413279!3d45.77822874451861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1740748559206!5m2!1sfr!2sfr" width="100%" height="420px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}