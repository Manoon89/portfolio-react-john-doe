import Header from "../components/header/header" ;
import "../assets/css/home.css" ;
import Footer from "../components/footer/footer" ;
import imgGit from "../assets/icons/github.svg" ;
import imgTwitter from "../assets/icons/twitter.svg" ;
import imgLink from "../assets/icons/linkedin.svg" ;

export default function Home () {
    return (
        <body>
            <Header title="Bonjour, je suis John Doe" subtitle="Développeur web full stack"
            description="Modale" bg="index-header-titles"/>
            <Footer imgGitHub={imgGit} imgX={imgTwitter} imgLinkedin={imgLink}/>
        </body>
    );
}