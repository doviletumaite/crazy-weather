import { Col, Card, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style/Details.css";

const Details = () => {
  const dispatch = useDispatch();
  const data = useSelector((s) => s.data);
  console.log(data);
  const celsius = parseInt(data.elements.main.temp - 273);
  const celsiusPerceved = parseInt(data.elements.main.feels_like - 273);
  const celsiusMax = parseInt(data.elements.main.temp_max - 273);
  const celsiusMin = parseInt(data.elements.main.temp_min - 273);

  return (
    <div className="homeContainer">
      <Navbar collapseOnSelect expand="lg">
        <Link to="/">
          <Navbar.Brand className="navTitle">Crazy Weather</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Help
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Col xs={10} className="mx-auto my-5">
        <Card className="card">
          <Card.Header>
            today's weather in {data.elements.name} ({data.elements.sys.country}
            )
          </Card.Header>
          <Card.Body>
            <Card.Title>{data.elements.weather[0].main}</Card.Title>
            <Card.Text>
              {data.elements.weather[0].description}
              <br></br>
              Humidity: {data.elements.main.humidity}%<br></br>
              Temperature: {celsius} °C
              <br></br>
              Perceived temperature {celsiusPerceved} °C
              <br></br>
              Max temperature {celsiusMax} °C
              <br></br>
              Min temperature {celsiusMin} °C
              <br></br>
              Wind speed: {data.elements.wind.speed} m/s
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};
export default Details;
