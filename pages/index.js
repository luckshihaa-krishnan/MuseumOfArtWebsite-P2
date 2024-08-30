/*********************************************************************************
*  WEB422 – Assignment 5
*
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Luckshihaa Krishnan Student ID: 186418216 Date: 03/21/2024
********************************************************************************/



import { Inter } from "next/font/google";
import Image from 'react-bootstrap/Image';
import { Row,Col } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg" fluid rounded/>
      <Row>
        <Col md={6}>
          <br/>
          The <b>Metropolitan Museum of Art</b>, colloquially referred to as <b>the Met</b>, is an art museum 
          in New York City. It is the largest art museum in the Americas and fourth-largest in the world.
          <br/><br/>
          As of 2022, the museum welcomed 3,208,832 visitors, making it the third-most visited museum in the 
          United States and the eighth-most visited art museum in the world. Its permanent collection 
          contains over two million works, divided among 17 curatorial departments. The main building 
          at 1000 Fifth Avenue, along the Museum Mile on the eastern edge of Central Park on Manhattan&apos;s 
          Upper East Side, is by area one of the world&apos;s largest art museums. The first portion of the 
          approximately 2-million-square-foot (190,000 m2) building was built in 1880. A much smaller 
          second location, The Cloisters at Fort Tryon Park in Upper Manhattan, contains an extensive 
          collection of art, architecture, and artifacts from medieval Europe.
        </Col>
        <Col md={6}>
          <br/>
          The Metropolitan Museum of Art was founded in 1870 with its mission to bring art and art 
          education to the American people. The museum&apos;s permanent collection consists of works of art 
          ranging from the ancient Near East and ancient Egypt, through classical antiquity to the 
          contemporary world. It includes paintings, sculptures, and graphic works from many European 
          Old Masters, as well as an extensive collection of American, modern, and contemporary art. 
          The Met also maintains extensive holdings of African, Asian, Oceanian, Byzantine, and Islamic 
          art. The museum is home to encyclopedic collections of musical instruments, costumes, and 
          decorative arts and textiles, as well as antique weapons and armor from around the world. 
          Several notable interiors, ranging from 1st-century Rome through modern American design, 
          are installed in its galleries.
          <br/><br/>
          <a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art</a>
        </Col>
      </Row>
    </>
  );
}
