import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa"
import { Col, Row } from 'react-bootstrap';

import ThemeButton from './reuseable/ThemeButton';
import { FiPhoneCall } from "react-icons/fi"
import { ZendeskAPI } from '../ZendeskConfig';

function NavBar() {
  const submit2 = () => {
    ZendeskAPI("messenger", "open");
  };

  return (
    <>
      <Container>
        <div className='d-flex flex-row justify-content-end pt-2'>
          {/* <Col className='mt-2 pe-3'> */}
          <span className='topNav text-light mt-3 pe-4'>  <a href="tel:(737) 910 3898" className='text-white me-4'> <span id='hoverEffect' style={{ fontWeight: 900, color: "#f99f20" }}>(737) 910 3898</span> </a></span>
          {/* <span className='topNav text-light pe-3'> <ThemeButton classe="mt-0" name="Call Now" /> </span> */}
          < a href="javascript:void(Tawk_API.toggle())"> <button id='submitBtn2' className=' mt-2 pt-3 pb-2'>Live Chat</button></a>
          {/* </Col> */}
        </div>
      </Container>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img src={logo} alt="logo" width={190} height={50} />

            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <FaBars style={{ color: 'black' }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ fontSize: "1.5rem" }}>
              <Nav.Link as={Link} eventKey="1" to="/" className='text-white linkz mx-3 px-2'>Home</Nav.Link>
              <Nav.Link as={Link} eventKey="2" to="/aboutus" className='text-white linkz mx-3 px-2'>About Us</Nav.Link>
              <div className="linkz">
                <NavDropdown
                  className='mx-3'
                  title={
                    <span className="text-white text-center opacity-100">Services</span>
                  } id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} className='bg-dark text-white pe-5 ps-4 py-2' id='dropDownItem' to="/service/Publishing">Publishing</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white pe-5 ps-4 py-2' id='dropDownItem' to="/service/Marketing">Marketing</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white pe-5 ps-4 py-2' id='dropDownItem' to="/service/Editing&Proofreading">Editing &amp; Proofreading</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white pe-5 ps-4 py-2' id='dropDownItem' to="/service/Writing&Publishing">Book Writing</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white pe-5 ps-4 py-2' id='dropDownItem' to="/service/CoverDesign">Cover Design</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white pe-5 ps-4 py-2' id='dropDownItem' to="/service/Illustrations">Illustrations</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white pe-5 ps-4 py-2' id='dropDownItem' to="/service/AudiobookNarration">Audiobooks</NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='bg-dark text-white pe-5 ps-4 py-2' id='dropDownItem' to="/service/AuthorWebsite">Author Website</NavDropdown.Item>
                  {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
              </div>
              <Nav.Link as={Link} eventKey="3" to="/portfolio" className='text-white linkz mx-3 px-2'>Portfolio</Nav.Link>
              {/* <Nav.Link as={Link} eventKey="4" to="/testimonials" className='text-white linkz mx-3 px-2'>Testimonials</Nav.Link> */}
              <Nav.Link as={Link} eventKey="5" to="/contactus" className='text-white linkz mx-3 px-2'>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;