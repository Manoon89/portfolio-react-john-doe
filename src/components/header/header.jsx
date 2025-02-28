import Img from './header-details/img' ;
import Nav from './header-details/nav' ;
import Modale from './header-details/modale' ;

export default function Header (props) {

    return(
        <header>
            <Nav />
            {props.img}
            <div className="index-header-titles">
                <h1 className="text-center pt-4">{props.title}</h1>
                <h2 className="text-center">{props.subtitle}</h2>
                <p className="text-center">{props.description}</p>
            </div>
        </header>
    );
}