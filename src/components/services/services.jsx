export default function Services (props) {
    return (
        <section className="card text-center col-md-3 mb-1 m-2 p-0">
            <img src={props.img} className="icon-services text-primary card-img-top primary pt-4" alt={props.alt} />
            <article className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text ">{props.description}</p>
            </article>
        </section> 
    );
}