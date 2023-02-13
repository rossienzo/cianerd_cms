import React, {Component} from "react";
import Main from "../common/layout/Main";
import Navigation from "../common/navigation/Navigation";
import Content from "../common/content/Content";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col, Alert } from "react-bootstrap";

import { insertData } from "../api/Api";

import { initialState } from "../state/initialState";
import If from "../common/operador/If";

class Contact extends Component
{
    constructor(props)
    {
        super(props);

        this.state = initialState;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    inputErrorHandler(object)
    {
        return;
    }
    /*
    // Verifica se os campos contém algum dado vazio
        for (const prop in this.state.client) 
            if(this.state.client[prop].replace(/\s/g, "") === "")
                return this.setState({...this.state, alert: {...this.state.alert, type: "warning", message: "Nenhum campo pode estar vazio!"}});
            else
                this.setState({...this.state, alert: initialState.alert});
    */
    handleSubmit(e)
    {
        e.preventDefault();
        
        // Verifica se os campos contém algum dado vazio
        for (const prop in this.state.client) 
            if(this.state.client[prop].replace(/\s/g, "") === "")
                return this.setState({...this.state, alert: {...this.state.alert, type: "warning", message: "Nenhum campo pode estar vazio!"}});
            else
                this.setState({...this.state, alert: initialState.alert});
        

        insertData(process.env.REACT_APP_CLIENTS_URL, process.env.REACT_APP_CLIENTS_TOKEN, this.state.client)
        .then(data => 
        {  
            this.setState({...this.state, client: initialState.client, 
                alert: 
                {
                    ...this.state.alert, 
                    type: "success", 
                    message:"Mensagem enviada! Nós da Cia Nerd agradeçemos o contato!"
                } 
            })
        })
        .catch(error => 
        {
            console.error('Error:', error);
            this.setState({...this.state, 
                alert: 
                {
                    ...this.state.alert, 
                    type: "danger", 
                    message:"Erro! Não foi possível receber a sua mensagem, porfavor entre em contato pelo telefone"
                } 
            })
        });
    }

    handleChange(e)
    {
        this.setState({ ...this.state, 
            client: 
            { 
                ...this.state.client,
                [e.target.name]: e.target.value
            }
        })
    }

    render()
    {
        return (
            <React.Fragment>
                <Navigation />
                <Main class="bg-white contact">
                    <Content title="Sobre Nós" col="col-9">
                        <p>
                            Somos uma loja de boardgames e artigos geeks que já atua no mercado a 3 anos. 
                            Disponibilizamos os melhores games que garantem diversão entre amigos e família
                            e artigos sobre animes, jogos, e da cultura pop.
                        </p>
                    </Content>

                    <Content title="Nossa Loja" col="col-6 ratio ratio-21x9">
                        <iframe src="https://www.google.com/maps/embed?pb!1m18!1m12!1m3!1d3686.137668719679!2d-41.929374282556154!3d-22.499017399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97b4cfcb19074b%3A0x86558b7d7bd70f0b!2sR.%20Resende%2C%20470%20-%20Jardim%20Maril%C3%A9a%2C%20Rio%20das%20Ostras%20-%20RJ%2C%2028895-883!5e0!3m2!1spt-BR!2sbr!4v1669827149727!5m2!1spt-BR!2sbr" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            placeholder="loja no google maps"
                            title="myFrame">
                        </iframe>
                    </Content>

                    <Content title="Fale conosco" col="col-9">
                        <If test={ this.state.alert.message !== "" }>
                            <Alert variant={this.state.alert.type} >
                                {this.state.alert.message}
                            </Alert>
                        </If>
                        <Form onSubmit={this.handleSubmit}>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" className="rounded-0" 
                                        name="name" onChange={ e => this.handleChange(e)} value={ this.state.client.name || ""} placeholder="Digite seu nome completo"/>
                                </Col>
                                <Col>
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="email" className="rounded-0" 
                                        name="email" onChange={ e => this.handleChange(e)} value={ this.state.client.email || ""} placeholder="Digite seu email" />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col>
                                    <Form.Label>Telefone</Form.Label>
                                    <Form.Control type="text" className="rounded-0" 
                                        name="phone" onChange={ e => this.handleChange(e)} value={ this.state.client.phone || ""} placeholder="Digite seu Telefone" />
                                </Col>
                                <Col>
                                    <Form.Label>Assunto</Form.Label>
                                    <Form.Control type="text" className="rounded-0" 
                                        name="title" onChange={ e => this.handleChange(e)} value={ this.state.client.title || ""}  placeholder="Digite o assunto" />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col>
                                    <Form.Label>Mensagem</Form.Label>
                                    <Form.Control className="rounded-0" as="textarea" 
                                        name="message" onChange={ e => this.handleChange(e)} value={ this.state.client.message || ""}  rows={6} minLength="30"  placeholder="Digite sua mensagem" />
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col className="d-flex flex-row-reverse">
                                    <Button className="mb-4 rounded-0" variant="primary" type="submit"> Enviar Mensagem </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Content>
                </Main>
            </React.Fragment>
        );
    }
} 

export default Contact;