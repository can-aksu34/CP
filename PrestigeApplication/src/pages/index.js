import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

 import Layout from "../components/layout"
// import Seo from "../components/seo"
import Menu from "../components/Menu.js"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.css'


const IndexPage = () => (
  <Layout>
    <Menu/>
    <button type="button" className="btn btn-primary">Primary</button>
    <Footer />
  </Layout>
  
)

export default IndexPage
