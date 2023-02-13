import "./News.css";

import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const News = (props) => (
    <section className="send-news container">
        <Row>
            <Col>
                <h3> {props.text} </h3>
            </Col>
            <Col>
                <Form>
                    <InputGroup className="mb-3">
                        <Form.Control
                            className="rounded-0 border-0 p-2"
                            type="email"
                            placeholder="Digite seu E-mail"
                            aria-label="Digite seu E-mail"
                            name="email" />
                        <Button 
                            className="rounded-0 border-0"
                            variant="outiline-secondary">Enviar</Button>
                    </InputGroup>
                </Form>
            </Col>
        </Row>
    </section>
);

export default News;
