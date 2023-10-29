import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Survey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Option 1" id="basic-nav-dropdown">
              <NavDropdown.Item href="/option-1/suboption-1">Suboption 1</NavDropdown.Item>
              <NavDropdown.Item href="/option-1/suboption-2">Suboption 2</NavDropdown.Item>
              <NavDropdown.Item href="/option-1/suboption-3">suboption 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto">
            <NavDropdown title="Option 2" id="basic-nav-dropdown">
              <NavDropdown.Item href="/option-2/suboption-1">Suboption 1</NavDropdown.Item>
              <NavDropdown.Item href="/option-2/suboption-2">Suboption 2</NavDropdown.Item>
              <NavDropdown.Item href="/option-2/suboption-3">suboption 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto">
            <NavDropdown title="Option 3" id="basic-nav-dropdown">
              <NavDropdown.Item href="/option-3/suboption-1">Suboption 1</NavDropdown.Item>
              <NavDropdown.Item href="/option-3/suboption-2">Suboption 2</NavDropdown.Item>
              <NavDropdown.Item href="/option-3/suboption-3">suboption 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto">
            <NavDropdown title="Option 4" id="basic-nav-dropdown">
              <NavDropdown.Item href="/option-4/suboption-1">Suboption 1</NavDropdown.Item>
              <NavDropdown.Item href="/option-4/suboption-2">Suboption 2</NavDropdown.Item>
              <NavDropdown.Item href="/option-4/suboption-3">suboption 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;