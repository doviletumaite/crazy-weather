import { Navbar, Nav } from "react-bootstrap"
import HomeSearch from "./HomeSearch"

const Home = () => {
    return ( 
<div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand>Crazy Weather</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
       Help
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<HomeSearch/>
</div>
    )
}
export default Home