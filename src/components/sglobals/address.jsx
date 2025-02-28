export default function Address (props) {
    return (
        <address>
            <p>{props.imgAddress} 40 rue Laure Diebold</p>
            <p>{props.imgCity} 69009 Lyon, France</p>
            <a href="@tel:1020304050" target="blank">{props.imgTel} 10 20 30 40 50</a>
            <a href="@mailto:john.doe@gmail.com" target="blank">{props.imgMail} john.doe@gmail.com</a>
        </address>
    );
}