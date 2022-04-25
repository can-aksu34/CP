import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

 import Layout from "../components/layout"
import Menu from "../components/Menu.js"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.css'
import img1 from '../images/carrelage11.jpg'
import img2 from '../images/carrelage21.jpg'
import img3 from '../images/carrelage31.jpg'
import img4 from '../images/img1.jpg'
import img5 from '../images/img2.jpg'
import img6 from '../images/img3.jpg'
import img7 from '../images/TEST.png'


const IndexPage = () => (
  <Layout>
    <Menu/>
    <br/>
  <center><h1>Avec une attention exceptionnelle aux détails depuis 2004</h1> </center>

    <p>Carrelage Prestige se spécialise dans les travaux de carrelage en tous genres partout dans la France.</p>
    <div class="accueilTest">
      <img src={img7} className="imgAccueil" alt="..."/>
    </div>

    <p>Du revêtement residentiel de plancher de cuisines et salles de bains complètes jusqu'aux travaux commericaux, nous pouvons personnaliser votre espace, vous donner des conseils de conception et réaliser le projet à un prix abordable.</p><br/>
    <p>Grâce à notre expérience éprouvée en matière de carrélage, nous sommes devenus des artistes, pionniers des progrès de notre métier, avec une attention méticuleuse aux détails. La collaboration entre notre personnel garantira que votre vision se concrétisera à jamais ... peu importe les exigences d'une installation.
    Jetez un œil à notre siteweb pour une sélection de projets mettant en valeur notre vaste expérience, et contactez-nous pour nous parler de votre prochain projet.</p><br/>

    <Footer />
  </Layout>
  
)

export default IndexPage
