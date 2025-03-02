import Header from "../components/header/header" ;
import Footer from "../components/footer/footer" ;
import "../assets/css/home.css" ;
import Modale from "../components/header/header-details/modale";
import imgJohn from "../assets/images/john-doe-about.jpg" ;
import profilePhoto from "../assets/images/john-doe-profile.png"

// N'ayant pas en ressources la photo pour la modale & ne l'ayant pas trouvée sur internet... j'ai improvisé :)

export default function Home () {
    return (
        <div>
            <Header title="Bonjour, je suis John Doe" subtitle="Développeur web full stack"
             modal={<Modale photo={profilePhoto} />} bg="index-header-titles" classH1="title-home text-center pt-4"/>
            <main className="w-md-75 shadow p-4 mt-4 mb-5 me-2 me-md-auto ms-2 ms-md-auto bg-body-tertiary rounded container-fluid">
                <div className="row">
                    <section className="col-md-6 m-0 p-2">
                        <h3 className="section-title-home border-bottom border-primary pb-4 mb-4 border-4">A propos</h3>
                        <img className="w-100 pt-2 pb-2" src={imgJohn} alt="photo de John Doe"/>
                        <p className="pt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate eros ligula, nec ullamcorper 
                            mi tincidunt nec. Integer vitae ligula dignissim risus placerat tincidunt. Nullam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate eros ligula, nec ullamcorper 
                            mi tincidunt nec. Integer vitae ligula dignissim risus placerat tincidunt. Nullam.
                        </p>                        
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate eros ligula, nec ullamcorper 
                            mi tincidunt nec. Integer vitae ligula dignissim risus placerat tincidunt. Nullam.
                        </p>
                    </section>

                    <section className="col-md-6 m-0 p-2">
                        <h3 className="section-title-home border-bottom border-primary pb-4 mb-4 border-4">Mes compétences</h3>
                            <strong className="skills mt-2">HTML5 90%</strong>
                            <div className="progress mb-4" role="progressbar" aria-label="Danger example" aria-valuenow="100" 
                            aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-danger" style={{width: "90%"}}></div>
                            </div>
                            <strong className="skills mt-2">CSS3 80%</strong>
                            <div className="progress mb-4" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info" style={{width: "80%"}}></div>
                            </div>
                            <strong className="skills mt-2">JAVASCRIPT 70%</strong>
                            <div className="progress mb-4" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-warning" style={{width: "70%"}}></div>
                            </div>
                            <strong className="skills mt-2">PHP 60%</strong>
                            <div className="progress mb-4" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-success" style={{width: "60%"}}></div>
                            </div>
                            <strong className="skills mt-2">REACT 50%</strong>
                            <div className="progress mb-4" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{width: "50%"}}></div>
                            </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}