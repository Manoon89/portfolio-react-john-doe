import Address from '../sglobals/address' ;
import {NavLink} from 'react-router-dom' ;

export default function Footer (props) {

    return(
        <footer>
            <section>
                <h3>John Doe</h3>
                <Address />
                <a href="#"><img src={props.imgGitHub} alt="icone Github"/></a>
                <a href="#"><img src={props.imgX} alt="icone X"/></a>
                <a href="#"><img src={props.imgLinkedin} alt="icone Linkedin"/></a>
            </section>
            <section>
                <h3>Liens utiles</h3>
                {/*Attention titre des pages ne correspondant pas toujours à ceux de la NavBar*/}
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Me contacter</NavLink>
                <NavLink to="/mentionslegales">Mentions légales</NavLink>
            </section>
            <section>
                <h3>Mes dernières réalisations</h3>
                <a href="#">Fresh Food</a>
                <a href="#">Restaurant Akira</a>
                <a href="#">Espace bien-être</a>
                <a href="#">SEO</a>
                <a href="#">Création d'une API</a>
                <a href="#">Maquette d'un site</a>
            </section>
        </footer>
    );
}