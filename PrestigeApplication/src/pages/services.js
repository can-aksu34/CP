import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Seo from "../components/seo"
import Menu from "../components/Menu.js"
import Footer from "../components/Footer"
import "../styles/style.css"

const services = () => (
  <Layout>
     <Menu/>
     <center><h1>Salle de Bain</h1> </center>
     
     <p>Nos professionnels chevronnés chez Carrelage Prestige sont dotés de 25 ans d'expérience dans le remodelage de carreaux de céramique avec des services de remodelage de salle de bain et des produits de haute qualité. Nous vous proposerons des idées de conception et travaillerons efficacement afin de réaliser la salle de bain principale que vous avez toujours voulue. Tout notre travail de rénovation chez Carrelage Prestige CS est garanti, donc pas de soucis.</p>

    <p>Nous offrons divers produits et services, notamment le remodelage de la salle de bain, carreaux de porcelaine, les revêtements de sol d'ingénierie, l'installation de dosseret, l'installation de carreaux de céramique, l'installation de carreaux de douche, et l'installation de carreaux de baignoire. Nous sommes votre entreprise de rénovation. Notre savoir-faire de qualité est à un prix raisonnable et incomparable, nous avons donc chez Carrelage Prestige CS la certitude que nous pouvons embellir votre maison avec nos services pour les années à venir.</p> 

    <p>Vous avez un projet de revêtement de salle de bain en vue? Contactez-nous dès aujourd'hui et il nous fera plaisir d'en discuter avec vous.</p>
     <Footer/>
  </Layout>
)

export default services
