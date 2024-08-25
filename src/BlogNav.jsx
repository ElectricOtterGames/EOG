import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Home from "./pages/Home";
import Cassie from "./pages/Cassie";
import CrossStitch from "./pages/CrossStitch";
import DevBlog from "./pages/DevBlog";
import GameArt from "./pages/GameArt";
import GameMusic from "./pages/GameMusic";
import Knitting from "./pages/Knitting";
import Yarn from "./pages/Yarn";
function BlogNav() {
    return (
        <Navbar expand="lg" className="m-auto mb-4 justify-content-center navbar-dark">
            <Navbar.Brand as={NavLink} to="/">Electric Otter Games</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavDropdown title="Game Dev" id="game-dev-dropdown">
                        <NavDropdown.Item as={NavLink} to="/devblog">Dev Blog</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/gameart">Game Art</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/gamemusic">Music</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/">Idea Dump</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Fiber Arts" id="fiber-arts-dropdown">
                        <NavDropdown.Item as={NavLink} to="/yarn">Yarn Dyeing</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/knitting">Knitting</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/crossstitch">Cross Stitch</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to="/cassie">Cassie</Nav.Link>
                    <NavDropdown title="Misc" id="misc-dropdown">
                        <NavDropdown.Item as={NavLink} to="/">Gaming</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/">Books</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/">Miscellaneous Crafts</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default BlogNav