import { Row } from "react-bootstrap";
import "./Content.css";

const Content = (props) => (
    <section className="content mb-3">
        <Row className="justify-content-center">
            <h2>{props.title}</h2>
            <div className={props.col}>
            {props.children}
            </div>
        </Row>
    </section>
);

export default Content;