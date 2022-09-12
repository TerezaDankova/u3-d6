import { Navbar, Nav } from "react-bootstrap";

const MyNav = ({ title }) => (

      <Navbar style={{backgroundColor: "#F3F2F1"}} expand="lg">
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
    
    export default MyNav;