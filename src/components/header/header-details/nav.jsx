import {NavLink} from 'react-router-dom' ;

export default function Nav () {

    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark container-fluid">
            <div className="container-fluid">
                <a className="navbar-brand text-light text-uppercase" href="/">John Doe</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <NavLink className="nav-link text-light text-uppercase" to ="/" >Home</NavLink>
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