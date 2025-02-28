import Services from '../components/services/services' ;
import Header from "../components/header/header" ;
import Footer from "../components/footer/footer" ;
import bannerImg from "../assets/images/banner.jpg"
import imgGit from "../assets/icons/github.svg" ;
import imgTwitter from "../assets/icons/twitter.svg" ;
import imgLink from "../assets/icons/linkedin.svg" ;
import iconBrush from "../assets/icons/brush.svg" ;
import iconCode from "../assets/icons/code-slash.svg" ;
import iconSearch from "../assets/icons/search.svg" ;

export default function MyServices () {

    return(
        <div>
            <Header title="Mon offre de services" description="Voici les prestations sur lesquelles je peux intervenir"
            img={<img className="w-100" src={bannerImg} alt="banière bleue"/>}/>   
            
            <main className="container-fluid pb-4">
                <div className="row d-flex justify-content-center">

                    <Services 
                        title="UX Design" 
                        description="L'UX Design est une discipline qui consiste à concervoir des produits
                            (sites web, applications mobiles, logiciels, objets connectés, etc) en plaçant l'utilisateur au centre des
                            préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."
                        img={iconBrush}
                        alt="icône pinceau"     
                    />

                    <Services 
                        title="Développement web" 
                        description="Le développement de sites web consiste à créer des sites internet en utilisant des langages de
                            programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."
                        img={iconCode}
                        alt="icône code"     
                    />

                    <Services 
                        title="Référencement" 
                        description="Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le
                            faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est 
                            d'attirer un maximum de visiteurs qualifiés sur le site."
                        img={iconSearch}
                        alt="icône pinceau"     
                    />

                </div>
            </main>

            <Footer imgGitHub={imgGit} imgX={imgTwitter} imgLinkedin={imgLink}/>   
        </div>
    );
}