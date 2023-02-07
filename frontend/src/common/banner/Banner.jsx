import { Row } from "react-bootstrap";
import "./Banner.css";

const Banner = (props) => (
    <Row className="banner">
        {props.children}
    </Row>
);

export default Banner;