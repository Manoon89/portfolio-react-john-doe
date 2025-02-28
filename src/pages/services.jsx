import Services from '../components/services/services' ;
import Header from "../components/header/header" ;
import Footer from "../components/footer/footer" ;
import bannerImg from "../assets/images/banner.jpg"

export default function MyServices () {

    return(
        <body>
            <Header title="Mon offre de services" description="Voici les prestations sur lesquelles je peux intervenir"
            img={<img src={bannerImg} alt="banière bleue"/>}/>   
            <Footer />       
        </body>
    );
}