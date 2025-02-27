import Logo from './header-details/logo' ;
import Nav from './header-details/nav' ;
import Title from './header-details/header-title' ;
import Image from './header-details/img' ;
import Modale from './header-details/modale' ;

export default function Header (props) {

    return(
        <header>
            <Nav />
            <h1>{props.title}</h1>
        </header>
    );
}