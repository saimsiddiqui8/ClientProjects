import React from 'react'
import "./style.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useState } from 'react';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return (
        <>
            <Navbar id="master-menu" bg="light" expand="lg" fixed="top" >
                <div className='container'>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto pe-5">
                            <NavDropdown
                                style={{ textDecoration: "none" }}

                                className='ps-5 link'
                                show={show}
                                onMouseEnter={showDropdown}
                                onMouseLeave={hideDropdown}
                                title={
                                    <NavDropdown.Item as={Link} eventKey="1" className="text-white text-center link"
                                        to="/company">OUR COMPANY</NavDropdown.Item>
                                } id="basic-nav-dropdown">
                                <NavDropdown.Item className='text-center w-100 px-5 my-2' id='dropdown' style={{ color: "#d42222" }} href="#action/3.1">HISTORY</NavDropdown.Item>
                                <NavDropdown.Item className='text-center w-100 px-5 my-2' id='dropdown' style={{ color: "#d42222" }} href="#action/3.2">
                                    EXECUTIVE TEAM
                                </NavDropdown.Item>
                                <NavDropdown.Item className='text-center w-100 px-5 my-2' id='dropdown' style={{ color: "#d42222" }} href="#action/3.3">CULTURE & CAREERS</NavDropdown.Item>
                                <NavDropdown.Item className='text-center w-100 px-5 my-2' id='dropdown' style={{ color: "#d42222" }} href="#action/3.4">
                                    CONTACT US
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} eventKey="2" to="/publications" className='mx-2 link' href="#link">PUBLICATIONS</Nav.Link>
                            <Nav.Link as={Link} eventKey="3" to="/conferences" className='mx-2 link' href="#link">EVENTS</Nav.Link>
                            <Nav.Link as={Link} eventKey="4" to="/awards" className='mx-2 link' href="#link" >AWARDS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

        </>
    )
}

export default NavBar