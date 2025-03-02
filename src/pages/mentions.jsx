import Header from "../components/header/header" ;
import Footer from "../components/footer/footer" ;
import Address from '../components/sglobals/address' ;
import iconMap from "../assets/icons/map.svg";
import iconGeo from "../assets/icons/geo-alt.svg";
import iconPhone from "../assets/icons/phone.svg";
import iconMail from "../assets/icons/envelope-at.svg";
import iconGlobe from "../assets/icons/globe.svg" ;
import { Helmet } from 'react-helmet' ;

export default function MentionsLegales () {

    return(
        <div>
            <Helmet>
                <meta name="robots" content="noindex"/>
            </Helmet>
            
            <Header title="Mentions Légales" classH1="text-center pt-4"
                line={<div className="mx-auto my-3 border-top border-4 border-primary mb-4" style={{width: "30%"}}></div>}
            />

            {/* Changement de la taille en fonction du type d'écran selon les maquettes avec w-md-75 
            Rajout d'une marge pour les petits écrans uniquement*/}
            <main className="w-md-75 me-2 me-md-auto ms-2 ms-md-auto accordion">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Editeur du site
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <section>
                                <h3>John Doe</h3>
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
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                            Hébergeur
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <section>
                                <h3 className="mentions-subtitle">alwaysdata</h3>
                                <address>91 Rue du Faubourg Saint-Honoré, 75008 Paris</address>
                                <a className="mentions-link" href="#">{<img className="pe-2" src={iconGlobe} alt="icone globe"/>}www.alwaysdata.com</a>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                            Crédits
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <section>
                                <h3 className="mentions-subtitle">Crédits</h3>
                                <p>Ce site a été réalisé par John Doe, étudiant au <a className="mentions-link" 
                                    href="https://www.centre-europeen-formation.fr/" target="_blank">
                                    Centre Européen de Formation</a>.
                                </p>
                                <p className="fst-italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues 
                                    sur le site <a className="mentions-link" href="https://pixabay.com/fr/" target="_blank">Pixabay</a>
                                </p>
                                <p className="fst-italic">La favicon de ce site a été fournie par <a className="mentions-link" 
                                    href="https://www.flaticon.com/de/kostenlose-icons/john-doe" 
                                    target="_blank">John doe Icons erstellt von Freepik - Flaticon</a>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}