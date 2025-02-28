import Services from '../components/services/services' ;
import Header from "../components/header/header" ;
import Footer from "../components/footer/footer" ;
import bannerImg from "../assets/images/banner.jpg"
import imgGit from "../assets/icons/github.svg" ;
import imgTwitter from "../assets/icons/twitter.svg" ;
import imgLink from "../assets/icons/linkedin.svg" ;

export default function MyServices () {

    return(
        <body>
            <Header title="Mon offre de services" description="Voici les prestations sur lesquelles je peux intervenir"
            img={<img src={bannerImg} alt="banière bleue"/>}/>   
            <Footer imgGitHub={imgGit} imgX={imgTwitter} imgLinkedin={imgLink}/>   
        </body>
    );
}