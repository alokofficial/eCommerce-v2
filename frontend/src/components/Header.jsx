import { Navbar, Nav, Container } from "react-bootstrap"
import {FaShoppingCart, FaUser} from "react-icons/fa"
import logo from "../assets/logo.png"
const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className="py-2 shadow">
            <Container fluid className="mx-1">
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="logo" className="rounded-circle" width="60px" /></Navbar.Brand>
                    <Navbar.Brand href="/" className="text-uppercase fw-bold">EpoxySneak</Navbar.Brand>
                </Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-end">
                        <Nav.Link href="/cart"><FaShoppingCart /> Cart</Nav.Link>
                        <Nav.Link href="/login"><FaUser /> Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header