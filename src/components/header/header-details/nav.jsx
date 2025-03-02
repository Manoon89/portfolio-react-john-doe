import {NavLink} from 'react-router-dom' ;

export default function Nav () {

    {/*ayant 2 consignes différentes (bouton hamburger dans le brief demandé pour la tablette, mais les maquettes de tablettes
    étant sur un modèle identique au format desktop, j'ai préféré me référer aux maquettes puisqu'elles sont le reflet 
    du résultat attendu par le client. S'il fallait changer le breakpoint, au lieu de navbar-expand-md j'aurais mis
    navbar-expand-lg */}

    return(
        <nav className="navbar navbar-dark navbar-expand-md bg-dark container-fluid">
            <div className="container-fluid">
                <a className="navbar-brand text-light text-uppercase" href="/"><strong>John Doe</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0 justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <NavLink className="nav-link text-light text-uppercase" to ="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link text-light text-uppercase" to ="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link text-light text-uppercase" to ="/portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link text-light text-uppercase" to ="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link text-light text-uppercase" to ="/mentionslegales">Mentions Légales</NavLink>
                        </li>
                    </ul>   
                </div>
            </div>    
        </nav>
    );
}