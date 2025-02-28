export default function Form () {
    return (
        <form>
            <h3>Formulaire de contact</h3>
            <input type="text" placeholder="Votre nom" id="name" value="name" required/>
            <input type="email" placeholder="Votre adresse email" id="email" value="email" required/>
            <input type="tel" placeholder="Votre numéro de téléphone" id="phone" value="phone" required/>
            <input type="text" placeholder="Sujet" id="subject" value="subject" required/>
            <textarea placeholder="Votre message" name="message" id="message" required></textarea>
            <input type="submit" value="Envoyer" id="Envoyer"/>
        </form>
    )
}