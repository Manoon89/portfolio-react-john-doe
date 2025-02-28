import Address from '../sglobals/address' ;
import {NavLink} from 'react-router-dom' ;

export default function Footer (props) {

    return(
        <footer className="bg-dark text-light container-fluid p-4 m-auto">
            <div className="row d-flex">
                <section className="col-md-4">
                    <h3 className="fs-5 fw-normal">John Doe</h3>
                    <Address />
                    <a href="#"><img className="bg-dark me-1" src={props.imgGitHub} alt="icone Github"/></a>
                    <a href="#"><img className="bg-dark me-1" src={props.imgX} alt="icone X"/></a>
                    <a href="#"><img className="bg-dark me-1" src={props.imgLinkedin} alt="icone Linkedin"/></a>
                </section>
                <section className="col-md-4">
                    <h3 className="fs-5 fw-normal">Liens utiles</h3>
                    {/*Attention titre des pages ne correspondant pas toujours à ceux de la NavBar*/}
                    <NavLink className="d-block lh-sm fw-light" to="/">Accueil</NavLink>
                    <NavLink className="d-block lh-sm fw-light" to="/services">Services</NavLink>
                    <NavLink className="d-block lh-sm fw-light" to="/portfolio">Portfolio</NavLink>
                    <NavLink className="d-block lh-sm fw-light" to="/contact">Me contacter</NavLink>
                    <NavLink className="d-block lh-sm fw-light" to="/mentionslegales">Mentions légales</NavLink>
                </section>
                <section className="col-md-4">
                    <h3 className="fs-5 fw-normal">Mes dernières réalisations</h3>
                    <a href="#" className="d-block lh-sm fw-light">Fresh Food</a>
                    <a href="#" className="d-block lh-sm fw-light">Restaurant Akira</a>
                    <a href="#" className="d-block lh-sm fw-light">Espace bien-être</a>
                    <a href="#" className="d-block lh-sm fw-light">SEO</a>
                    <a href="#" className="d-block lh-sm fw-light">Création d'une API</a>
                    <a href="#" className="d-block lh-sm fw-light">Maquette d'un site</a>
                </section>
            </div>
        </footer>
    );
}