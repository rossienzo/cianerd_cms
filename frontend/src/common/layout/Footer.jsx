import "./Footer.css";

import { Row, Col } from "react-bootstrap";

import Logo from "../../res/imgs/logo-cianerd-branca.png";
import twitterLogo from "../../res/icons/twitter.png";
import instaLogo from "../../res/icons/instagram.png";
import faceLogo from "../../res/icons/facebook.png";
import whatsLogo from "../../res/icons/whatsapp.png";

const Footer = (props) => (
    <footer>
        <div className="container">
            <Row>
                <Col>
                    <address>
                        <a href="tel:22997719547">(22) 99771-9547</a> <br />
                        <a href="mailto:pedropugian@consultoriafocus.com"> pedropugian@consultoriafocus.com</a> <br />
                        <a href="https://goo.gl/maps/uT91sHwfywhPSKHU7"target="_blank">
                            R. Resende, 470 - Jardim Mariléa - Rio das Ostras - <br />
                            Rio de janeiro
                        </a>
                    </address>
                </Col>
                    
                <Col>
                    <a href="/" id="branding" className="navbar-brand mr-auto">
                        <img 
                            src={Logo} 
                            alt="logo" />
                    </a>
                </Col>
                
                <Col className="social-medias">
                    <h3>Nossas Redes</h3>
                    <Row className="icons">
                        <Col> <img className="icon" src={faceLogo} alt="facebook logo" /> </Col>
                        <Col> <img className="icon" src={instaLogo} alt="instagram logo" /> </Col>
                        <Col> <img className="icon" src={twitterLogo} alt="twitter logo" /> </Col>
                        <Col> <img className="icon" src={whatsLogo} alt="whastapp logo" /> </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    </footer>
);

export default Footer;