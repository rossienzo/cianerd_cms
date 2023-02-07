import "./Cards.css";

import { Row } from "react-bootstrap";

const Cards = (props) => (
    <div className="cards">
        <Row>
            {props.children}
        </Row>
    </div>
);

export default Cards;