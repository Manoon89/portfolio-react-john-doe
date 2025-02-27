import Logo from './header-details/logo' ;
import Nav from './header-details/nav' ;
import Title from './header-details/header-title' ;
import Image from './header-details/img' ;
import Modale from './header-details/modale' ;

export default function Header (props) {

    return(
        <header>
            <Nav />
            <h1 className="text-center pt-4">{props.title}</h1>
            <h2 className="text-center">{props.subtitle}</h2>
            <p className="text-center">{props.description}</p>
        </header>
    );
}