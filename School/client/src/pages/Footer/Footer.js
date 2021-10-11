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
      {/* <img
        className="spcPic"
        src="D:/RBK hack Reactor/GreenField project/school-field/School/client/src/images/ready.png"
      /> */}
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1
        style={{
          color: "black",
          textAlign: "center",
          marginTop: "-60px",
          fontFamily: "Francois One",
        }}
      >
        School-Field
      </h1>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Container style={{ fontFamily: "Francois One" }}>
        <Row>
          <Column>
            <Heading style={{ color: "black", fontFamily: "Francois One" }}>
              About Us
            </Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading style={{ color: "black", fontFamily: "Francois One" }}>
              Services
            </Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading style={{ color: "black", fontFamily: "Francois One" }}>
              Contact Us
            </Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading style={{ color: "black", fontFamily: "Francois One" }}>
              Social Media
            </Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
