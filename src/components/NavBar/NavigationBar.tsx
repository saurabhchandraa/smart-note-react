import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { logout } from "../../services/AuthService";

export const NavigationBar = () => (
  // <Navbar bg="dark" variant="dark">
  //     <Container>
  //         <Navbar.Brand href="/">SmartNote</Navbar.Brand>
  //         <Nav className="me-auto">
  //             <Nav.Link href="/">Home</Nav.Link>
  //             <Nav.Link href="/login">Login</Nav.Link>
  //             <Nav.Link href="/signup">SignUp</Nav.Link>
  //             <Nav.Link href="/logout">Logout</Nav.Link>
  //         </Nav>
  //     </Container>
  // </Navbar>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container fluid>
      <Navbar.Brand href="/">SmartNote</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="User">
            <NavDropdown.Item href="#action/3.1">Email</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/login" onClick={logout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">SignUp</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
