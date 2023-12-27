import Container from 'react-bootstrap/Container'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {



    return (<>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Max Feldman</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/AboutMe">About Me</Nav.Link>
                    <Nav.Link href="https://github.com/MaxFeldman1">Github</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <br />
    </>);
}

export default Header;