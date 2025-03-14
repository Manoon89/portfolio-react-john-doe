export default function Services (props) {
    return (
        <section className="card text-center col-md-3 mb-1 m-2 pt-4">
            {props.img}
            <article className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text ">{props.description}</p>
            </article>
        </section> 
    );
}