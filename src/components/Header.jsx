import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FaSignInAlt, FaHome, FaUser, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../App.css"

function Header({ user, handleLogout }) {
  const logo = "https://i.imgur.com/TDB1QQv.png";
  return !user ?

    (<Navbar style={{ backgroundColor: "black", textAlign: "center"  }} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img className="logo-image" src={logo} alt="logo image"></img></Navbar.Brand>
        <Nav className="d-inline-flex p-2 bd-highlight" style={{textAlign: "center", margin: "auto", fontSize: "24px"}}>
          <Nav.Link as={Link} to="/"><FaHome />Home</Nav.Link>
          <Nav.Link as={Link} to="/signup"><FaUser /> Sign Up</Nav.Link>
          <Nav.Link as={Link} to="/login"><FaSignInAlt /> Login</Nav.Link>
          <Nav.Link as={Link} to="/cart"><AiOutlineShoppingCart /> Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>) :
    (<Navbar style={{ backgroundColor: "black"}} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img className="logo-image" src={logo} alt="logo image" /></Navbar.Brand>
        <Nav className="d-inline-flex p-2 bd-highlight" style={{textAlign: "center", margin: "auto", fontSize: "24px"}}>
          <Nav.Link as={Link} to="/"><FaHome /> Home</Nav.Link>
          <Nav.Link as={Link} to="/cart"><AiOutlineShoppingCart /> Cart</Nav.Link>
          <Nav.Link as={Link} to="#" onClick={handleLogout}
          ><FaSignOutAlt /> Logout</Nav.Link>
          <h5 id="nav-header-name">Welcome {user.name}!</h5>
        </Nav>
      </Container>
    </Navbar>)
}

export default Header;
