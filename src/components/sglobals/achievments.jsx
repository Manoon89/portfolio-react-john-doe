export default function Achievments (props) {
    return(
        <section className="card text-center col-md-3 mb-1 m-2 p-0">
            <img src={props.img} className="card-img-top" alt={props.alt} />
            <article className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text ">{props.description}</p>
                <a href="/portfolio" className="achievments-btn btn btn-primary">Voir le site</a>
            </article>
            <aside className="card-footer text-body-secondary">
                {props.tools}
            </aside>
        </section>
    ) ;
}