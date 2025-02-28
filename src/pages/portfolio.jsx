import Achievments from '../components/sglobals/achievments';
import Header from "../components/header/header" ;
import Footer from "../components/footer/footer" ;
import freshFoodImg from "../assets/images/portfolio/fresh-food.jpg"
import restaurantJaponaisImg from "../assets/images/portfolio/restaurant-japonais.jpg"
import espaceBienImg from "../assets/images/portfolio/espace-bien-etre.jpg"
import seoImg from "../assets/images/portfolio/seo.jpg"
import coderImg from "../assets/images/portfolio/coder.jpg"
import screensImg from "../assets/images/portfolio/screens.jpg"
import bannerImg from "../assets/images/banner.jpg"
import imgGit from "../assets/images/github.svg" ;
import imgTwitter from "../assets/images/twitter.svg" ;
import imgLink from "../assets/images/linkedin.svg" ;


export default function MyAchievments () {
    return (
        <div> 
            <Header title="Portfolio" description="Voici quelques-unes de mes réalisations."
            img={<img src={bannerImg} alt="banière bleue"/>}/>
            <main className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <Achievments img={freshFoodImg} alt="légumes frais" 
                    title="Fresh Food" description="Site de vente de produits frais en ligne" tools="Site réalisé avec PHP et MySQL"/>
                    <Achievments img={restaurantJaponaisImg} alt="sushis" 
                    title="Restaurant Akira" description="Site de vente de produits frais en ligne" tools="Site réalisé avec Wordpress"/>
                    <Achievments img={espaceBienImg} alt="paysage zen avec cailloux et plan d'eau" 
                    title="Espace bien-être" description="Site de vente de produits frais en ligne" tools="Site réalisé avec LARAVEL"/>
                    <Achievments img={seoImg} alt="images avec SEO écrit en gros et d'autres mots en plus petit" 
                    title="SEO" description="Améliration du référencement d'un site e-commerce" tools="Utilisation des outils SEO"/>
                    <Achievments img={coderImg} alt="copie écran de code HTML" 
                    title="Création d'une API" description="Création d'une API RESTFULL publique" tools="PHP - SYMFONY"/>
                    <Achievments img={screensImg} alt="bureau avec ordinateur fixe et mobile et tablette" 
                    title="Maquette d'un site web" description="Création du prototype d'un site" tools="Réalisé avec FIGMA"/>
                </div>
            </main>
            <Footer imgGitHub={imgGit} imgX={imgTwitter} imgLinkedin={imgLink}/>
        </div>
    );
}