import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Seo from "../components/seo"
import Menu from "../components/Menu.js"
import Footer from "../components/Footer"

const contact = () => (
  <Layout>
    <Menu/>

    <div className="contact" style={{backgroundColor:`#FFA996`, border: 'solid black'}}>

<center>
	<fieldset style={{width:`70%`}}> 
		<legend align="left"><div id="fieldtitre"> Merci de compléter:</div></legend>
 
    <form> 
	<p>
	<label for="nom"> Nom </label>
	<input id="nom" type="text" name="nom" required=""/>
	</p>

	
	<label for="prenom"> Prenom</label>
	<input id="prenom" type="text" name="prenom" required=""/>
	

	<p>
	<label for="mail"> E-mail </label>
	<input id="mail" type="text" name="email" required="" />
	</p>
	
	<p>
	<label for="avis"> Vos avis </label>
	<select name="vote">
		<option value="1">1🌟</option>
		<option value="2">2🌟🌟</option>
		<option value="3">3🌟🌟🌟</option>
		<option value="4">4🌟🌟🌟🌟</option>
		<option value="5">5🌟🌟🌟🌟🌟</option>
	</select>
	</p>
	
	<p>
		<label for="commentaire"> Commentaire </label>
                    
        	<textarea name="com" id="com" placeholder="VOTRE COMMENTAIRE EST IMPORTANT POUR NOUS !!!" style={{width: "500px", height: "250px"}}></textarea>               
	</p>	




 <input type="submit" className="bouton_envoyer" value="Envoyer" style={{width:"100px", height: "40px", marginleft: "400px", backgroundcolor:"#52cc00"}} />
 </form>
 </fieldset> 
</center>


{/* </fieldset> */}
</div>
<br/>

<Footer />

  </Layout>

)

export default contact
