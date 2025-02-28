import MentionsDetails from '../components/mentions/details-mentions' ;
import Header from "../components/header/header" ;
import Footer from "../components/footer/footer" ;
import imgGit from "../assets/images/github.svg" ;
import imgTwitter from "../assets/images/twitter.svg" ;
import imgLink from "../assets/images/linkedin.svg" ;

export default function MentionsLegales () {

    return(
        <body>
            <Header title="Mentions Légales"/>
            <Footer imgGitHub={imgGit} imgX={imgTwitter} imgLinkedin={imgLink}/>
        </body>
    );
}