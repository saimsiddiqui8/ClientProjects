import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import { MdOutlineSegment } from "react-icons/md"
import { Col, Row } from 'react-bootstrap';

function NavBar() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
          <h6 className='topNav mt-3 text-light'>Call us at +17372342834 OR START A LIVE CHAT</h6>
          </Col>
          <Col lg={6} md={6} sm={12}>
          <h6 className='topNav mt-3 text-end text-light'>Mon-Fri(9.00AM-05.30PM EST)</h6>
          </Col>
        </Row>
      </Container>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" width={200} height={100} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <MdOutlineSegment />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ fontSize: "1.5rem" }}>
              <Nav.Link as={Link} eventKey="1" to="/" className='text-white linkz'>Home</Nav.Link>
              <Nav.Link as={Link} eventKey="2" to="/aboutus" className='text-white linkz'>About Us</Nav.Link>
              <div className="linkz">
                <NavDropdown title={
                  <span className="text-white text-center">Services</span>
                } id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} className='bg-dark text-white opacity-50' to="/service/FyraPublishing">Amazon Author Solutions</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white opacity-50' to="/service/Publishing">Publishing</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white opacity-50' to="/service/Marketing">Marketing</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white opacity-50' to="/service/Editing&Proofreading">Editing &amp; Proofreading</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white opacity-50' to="/service/Writing&Publishing">Writing &amp; Publishing</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white opacity-50' to="/service/CoverDesign">Cover Design</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white opacity-50' to="/service/Illustrations">Illustrations</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white opacity-50' to="/service/Printing">Printing</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white opacity-50' to="/service/AudiobookNarration">Audiobook Narration</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white opacity-50' to="/service/AuthorWebsite">Author Website</NavDropdown.Item>
                  {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
              </div>
              <Nav.Link as={Link} eventKey="3" to="/portfolio" className='text-white linkz'>Portfolio</Nav.Link>
              <Nav.Link as={Link} eventKey="4" to="/testimonials" className='text-white linkz'>Testimonials</Nav.Link>
              <Nav.Link as={Link} eventKey="5" to="/contactus" className='text-white linkz'>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;