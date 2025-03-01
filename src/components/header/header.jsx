import Nav from './header-details/nav' ;
import Modale from './header-details/modale' ;

export default function Header (props) {

    return(
        <header>
            <Nav />
            {props.img}
            <div className={props.bg}>
                <h1 className={props.classH1}>{props.title}</h1>
                <h2 className="text-center">{props.subtitle}</h2>
                <p className="text-center title-description">{props.description}</p>
                {props.line}
            </div>
        </header>
    );
}