import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import Details from "./Details"
import HomeSearch from "./HomeSearch"
import { useHistory } from 'react-router'
import "./style/Home.css"

const Home = () => {
  const history = useHistory()
 
  const pathname = history.location.pathname

    return ( 
<div className="homeContainer">
<Navbar collapseOnSelect expand="lg">
  <Link to="/"><Navbar.Brand className="navTitle">Crazy Weather</Navbar.Brand></Link>
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
<HomeSearch/>
 
</div>
    )
}
export default Home