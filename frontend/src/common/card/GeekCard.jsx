import "./GeekCard.css";
import If from "../operador/If"; 
const { Card, Col } = require("react-bootstrap");

const GeekCard = (props) => (
  <Col key={props.idKey}>
    <Card key={`card-` + props.idKey}
      className="rounded-0"
      style={{ width: '18rem' }}>
      <Card.Text className="category"> {props.category} </Card.Text>
      
      <div className="card-img">
        <Card.Img variant="top" src={props.imgSrc} />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <span>Marca:</span> {props.mark} <br />
          
          <If test={!(props.duration === "" || props.duration == null)}>
            <span>Duração:</span> {props.duration} <br />
          </If>

          <If test={!(props.group === "" || props.group == null)}>
            <span>Pessoas:</span> {props.group} <br />
          </If>

          <If test={!(props.age === "" || props.age == null)}>
            <span>Idade:</span> {props.age} <br />
          </If>

          <If test={!(props.description === "" || props.description == null)}>
            <span>Descrição:</span> {props.description} <br />
          </If>

          <If test={!(props.manufacturer === "" || props.manufacturer == null)}>
            <span>Fabricante:</span> {props.manufacturer} <br />
          </If>

          <If test={!(props.material === "" || props.material == null)}>
            <span>Material:</span> {props.material || props.duration == null} <br />
          </If>

          <If test={!(props.gender === "" || props.gender == null)}>
            <span>Gênero:</span> {props.gender} <br />
          </If>

          <If test={!(props.model === "" || props.model == null)}>
            <span>Modelo:</span> {props.model} <br />
          </If>

          <If test={!(props.language === "" || props.language == null)}>
            <span>Linguagem:</span> {props.language} <br />
          </If>
          
          <If test={!(props.weight === "" || props.weight == null)}>
            <span>Tamanho:</span> {props.weight} <br />
          </If>

        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

export default GeekCard;