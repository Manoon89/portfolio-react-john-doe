import Header from "../components/header/header" ;
import "../assets/css/home.css" ;
import Footer from "../components/footer/footer" ;

export default function Home () {
    return (
        <body>
            <Header title="Bonjour, je suis John Doe" subtitle="Développeur web full stack"
            description="Modale" bg="index-header-titles"/>
            <Footer />
        </body>
    );
}