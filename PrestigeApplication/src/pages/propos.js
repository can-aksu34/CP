import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Seo from "../components/seo"
import Menu from "../components/Menu.js"
import Footer from "../components/Footer"


const propos = () => (
  
  <Layout>
      <body>
    <Menu/>
    <br/>
  <center><h1>Avec une attention exceptionnelle aux détails depuis 2004</h1> </center>

    <p>Carrelage Prestige se spécialise dans les travaux de carrelage en tous genres partout dans la France.</p>
    <p>Du revêtement residentiel de plancher de cuisines et salles de bains complètes jusqu'aux travaux commericaux, nous pouvons personnaliser votre espace, vous donner des conseils de conception et réaliser le projet à un prix abordable.</p><br/>
    <p>Grâce à notre expérience éprouvée en matière de carrélage, nous sommes devenus des artistes, pionniers des progrès de notre métier, avec une attention méticuleuse aux détails. La collaboration entre notre personnel garantira que votre vision se concrétisera à jamais ... peu importe les exigences d'une installation.
    Jetez un œil à notre siteweb pour une sélection de projets mettant en valeur notre vaste expérience, et contactez-nous pour nous parler de votre prochain projet.</p><br/>

    <Footer/>
    </body>
  </Layout>
)

export default propos
