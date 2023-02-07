import { Col } from "react-bootstrap";
import "./BannerItem.css";

const BannerItem = (props) => (
    <Col className="banner-item">
        <div className="icon">
            <img src={props.src} alt={props.alt} />
        </div>
        <div className="description">
            <p> {props.thinText} </p>
            <span> {props.boldText}</span>
        </div>
    </Col>
);

export default BannerItem;