import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
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
        <Router>
        <Navbar expand="lg" className="m-auto mb-4 justify-content-center navbar-dark">
            <Navbar.Brand as={Link} to="/">Electric Otter Games</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavDropdown title="Game Dev" id="game-dev-dropdown">
                        <NavDropdown.Item as={Link} to="/devblog">Dev Blog</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/gameart">Game Art</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/gamemusic">Music</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/">Idea Dump</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Fiber Arts" id="fiber-arts-dropdown">
                        <NavDropdown.Item as={Link} to="/yarn">Yarn Dyeing</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/knitting">Knitting</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/crossstitch">Cross Stitch</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/cassie">Cassie</Nav.Link>
                    <NavDropdown title="Misc" id="misc-dropdown">
                        <NavDropdown.Item as={Link} to="/">Gaming</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/">Books</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/">Miscellaneous Crafts</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cassie' element={<Cassie />} />
            <Route path='/crossstitch' element={<CrossStitch />} />
            <Route path='/devblog' element={<DevBlog />} />
            <Route path='/gameart' element={<GameArt />} />
            <Route path='/gamemusic' element={<GameMusic />} />
            <Route path='/knitting' element={<Knitting />} />
            <Route path='/yarn' element={<Yarn />} />

        </Routes>
        </Router>
    )
}

export default BlogNav