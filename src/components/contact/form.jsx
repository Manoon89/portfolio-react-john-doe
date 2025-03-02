export default function Form () {
    return (
        <form action="#" method="post" className="d-flex flex-column">
            <h2 className="contact-title border-bottom border-primary pb-4 mb-4 border-3">Formulaire de contact</h2>
            <input className="form-control p-2 mt-2" type="text" placeholder="Votre nom" id="name" required/>
            <input className="form-control p-2 mt-2" type="email" placeholder="Votre adresse email" id="email" required/>
            <input className="form-control p-2 mt-2" type="tel" placeholder="Votre numéro de téléphone" id="phone" required/>
            <input className="form-control p-2 mt-2" type="text" placeholder="Sujet" id="subject" required/>
            <textarea className="form-control p-2 mt-2" placeholder="Votre message" name="message" id="message" required></textarea>
            <input className="btn btn-primary mt-2 align-self-center" type="submit" value="Envoyer" id="Envoyer"/>
        </form>
    )
}