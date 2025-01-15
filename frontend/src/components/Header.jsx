import { Navbar, Nav, Container } from "react-bootstrap"
import {FaShoppingCart, FaUser} from "react-icons/fa"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className="py-2 shadow">
            <Container fluid className="mx-1">
                
                    <Navbar.Brand >
                        <Link to="/home">
                            <img src={logo} alt="logo" className="rounded-circle" width="50px" />
                            <span className="text-uppercase fw-bold ms-2">EpoxySneak</span>
                        </Link>
                    </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-end">
                            <Link to="/cart" className="nav-link"><FaShoppingCart /> Cart</Link>
                            <Link to="/login" className="nav-link"><FaUser /> Sign In</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header