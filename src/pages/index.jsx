import Header from "../components/header/header" ;
import "../assets/css/home.css" ;
import Footer from "../components/footer/footer" ;
import imgJohn from "../assets/images/john-doe-about.jpg" ;

export default function Home () {
    return (
        <body>
            <Header title="Bonjour, je suis John Doe" subtitle="Développeur web full stack"
            description="Modale" bg="index-header-titles"/>
            <main className="w-md-75 shadow p-4 mb-5 bg-body-tertiary rounded container-fluid">
                <div className="row">
                    <section className="col-md-6 m-0 p-2">
                        <h3 className="border-bottom border-primary pb-4 mb-4 border-3">A propos</h3>
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
                        <h3 className="border-bottom border-primary pb-4 mb-4 border-3">Mes compétences</h3>
                            <h4>HTML5 90%</h4>
                            <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" 
                            aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-danger" style={{width: "90%"}}></div>
                            </div>
                            <h4>CSS3 80%</h4>
                            <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info" style={{width: "80%"}}></div>
                            </div>
                            <h4>JAVASCRIPT 70%</h4>
                            <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-warning" style={{width: "70%"}}></div>
                            </div>
                            <h4>PHP 60%</h4>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-success" style={{width: "60%"}}></div>
                            </div>
                            <h4>REACT 50%</h4>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{width: "50%"}}></div>
                            </div>
                    </section>
                </div>
            </main>
            <Footer />
        </body>
    );
}