export default function Address (props) {
    return (
        <address>
            {/*Utilisation de liens pour l'adresse pour renvoyer vers la map*/}
            <a href="https://maps.app.goo.gl/e5i1Co5x4wVvXXYH9" target="blank" className="d-block lh-base fw-light">{props.imgAddress} 40 rue Laure Diebold</a>
            <a href="https://maps.app.goo.gl/e5i1Co5x4wVvXXYH9" target="blank" className="d-block lh-base fw-light">{props.imgCity} 69009 Lyon, France</a>
            <a href="@tel:1020304050" target="blank" className="d-block lh-base fw-light">{props.imgTel} 10 20 30 40 50</a>
            <a href="@mailto:john.doe@gmail.com" target="blank" className="d-block lh-base fw-light">{props.imgMail} john.doe@gmail.com</a>
        </address>
    );
}