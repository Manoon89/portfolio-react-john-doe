import Nav from './header-details/nav' ;

export default function Header (props) {

    return(
        <header>
            <Nav />
            {/*On met en propriétés tout ce qui a besoin soit d'être changé selon les pages, soit ce qui a besoin d'être
            affiché ou non selon les pages*/}
            {props.img}
            <div className={props.bg}>
                <h1 className={props.classH1}>{props.title}</h1>
                <h2 className="text-center">{props.subtitle}</h2>
                <p className="text-center title-description">{props.description}</p>
                {props.line}
                {props.modal}
            </div>
        </header>
    );
}