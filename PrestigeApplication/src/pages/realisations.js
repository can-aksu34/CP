import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Seo from "../components/seo"
import Menu from "../components/Menu.js"
import Slideshow from "../components/Slide"
import Footer from "../components/Footer"



const realisations = () => (
  
  <Layout>
    <Menu/>
    <p>Voici quelques vues de réalisations par Carrelage Prestige</p>
    <Slideshow/>
    <br/>
    <p>Veuillez vous diriger vers l'onglet Contact pour avoir plus d'informations.</p>
    <br/><br/>
    <Footer />
   
  </Layout>
)

export default realisations
