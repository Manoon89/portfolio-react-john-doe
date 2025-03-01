import Header from "../components/header/header" ;
import Footer from "../components/footer/footer" ;
import Address from '../components/sglobals/address' ;
import iconMap from "../assets/icons/map.svg";
import iconGeo from "../assets/icons/geo-alt.svg";
import iconPhone from "../assets/icons/phone.svg";
import iconMail from "../assets/icons/envelope-at.svg";
import iconGlobe from "../assets/icons/globe.svg" ;

export default function MentionsLegales () {

    return(
        <div>
            <Header title="Mentions Légales"
                line={<div className="mx-auto my-3 border-top border-4 border-primary mb-4" style={{width: "30%"}}></div>}
            />

            <main className="w-75 accordion">

                <div className="accordion-item">
                    <h3 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Editeur du site
                        </button>
                    </h3>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <section>
                                <h4>John Doe</h4>
                                <Address className="text-dark" imgAddress={<img src={iconMap} alt="icone carte"/>} 
                                    imgCity={<img src={iconGeo} alt="icone géolocalisation"/>} 
                                    imgTel={<img src={iconPhone} alt="icone smartphone"/>} 
                                    imgMail={<img src={iconMail} alt="icone enveloppe"/>}
                                />
                            </section>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h3 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                            Hébergeur
                        </button>
                    </h3>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <section>
                                <h4>alwaysdata</h4>
                                <address>91 Rue du Faubourg Saint-Honoré, 75008 Paris</address>
                                <a className="always-data" href="#">{<img className="pe-2" src={iconGlobe} alt="icone globe"/>}www.alwaysdata.com</a>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h3 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                            Crédits
                        </button>
                    </h3>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <section>
                                <h4>Crédits</h4>
                                <p>Ce site a été réalisé par John Doe, étudiant au Centre Européen de Formation.</p>
                                <p className="fst-italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site Pixabay</p>
                                <p className="fst-italic">La favicon de ce site a été fournie par John doe Icons erstellt von Freepik - Flaticon</p>
                            </section>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}