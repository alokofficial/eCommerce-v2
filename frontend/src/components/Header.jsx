import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap"
import {FaShoppingCart, FaUser} from "react-icons/fa"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
const Header = () => {
    const {cartItems} = useSelector(state => state.cart)
    const {userInfo} = useSelector(state => state.auth)

    const logoutHandler = () => {
      console.log("logout")

    }
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className="py-2 shadow">
            <Container fluid className="mx-1">
                    <Navbar.Brand >
                        <Link to="/">
                            <img src={logo} alt="logo" className="rounded-circle" width="50px" />
                            <span className="text-uppercase fw-bold ms-2">EpoxySneak</span>
                        </Link>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-end">
                            <Link to="/cart" className="nav-link"><FaShoppingCart /> Cart
                            {cartItems.length > 0 && (
                                <Badge pill bg="danger" className="ms-1">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</Badge>
                            )}
                            </Link>
                            {userInfo ?(
                                    <NavDropdown title={userInfo.name} id="username" align="end">
                                        <Link to="/profile" className="dropdown-item">Profile</Link>
                                        <Link to="/" onClick={logoutHandler} className="dropdown-item">Logout</Link>
                                    </NavDropdown>
                            ):(
                                <Link to="/login" className="nav-link"><FaUser /> Sign In</Link>
                            )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header