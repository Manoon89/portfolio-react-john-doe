import {Link} from 'react-router-dom' ;

export default function Nav () {

    return(
        <nav>
            <ul>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/services">Services</Link>
                </li>
                <li>
                    <Link to ="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to ="/contact">Contact</Link>
                </li>
                <li>
                    <Link to ="/services">Mentions Légales</Link>
                </li>
            </ul>
        </nav>
    );
}