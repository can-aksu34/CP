import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Travaux revêtement sol et mur
      </h1>
      <Container style={{  
                   marginBottom: "-250px" }}>
        <Row>
          <Column>
            <Heading>Carrelage Prestige</Heading>
            <FooterLink>Il se spécialise dans les travaux
            de carrelage en tout genre partout dans la France. 
            Grâce au savoir-faire et à la main-d’œuvre de Céramiques ,
            vous êtes garantis d’obtenir entière satisfaction.</FooterLink>
           
          </Column>
          
          <Column>
            <Heading style={{ marginLeft: "80px" }}>Contact</Heading>
            <FooterLink href="https://www.facebook.com/carrelageprestige">
                <span style={{ marginLeft: "80px" }}>
                  Facebook
                </span>
             </FooterLink>
            <FooterLink href="#" style={{ marginLeft: "80px" }}>Boncoin</FooterLink>
            <FooterLink href="https://www.instagram.com/carrelageprestige" style={{ marginLeft: "80px" }}>Instagram</FooterLink>
            
          </Column>
          <Column>
            <Heading style={{ marginLeft: "80px" }}>Adresse</Heading>
            <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>4 Rue de Belleville, 31200 Toulouse
                </span>
             
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Tél: 06.52.40.93.24
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  carrelage.prestige@hotmail.fr
                </span>
              </i>
            </FooterLink>
      
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;