import Link from 'next/link';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function NavBar() {
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);

    const handleMouseEnter1 = () => {
        setShowDropdown1(true);
    };

    const handleMouseLeave1 = () => {
        setShowDropdown1(false);
    };
    const handleMouseEnter2 = () => {
        setShowDropdown2(true);
    };

    const handleMouseLeave2 = () => {
        setShowDropdown2(false);
    };
    const handleMouseEnter3 = () => {
        setShowDropdown3(true);
    };

    const handleMouseLeave3 = () => {
        setShowDropdown3(false);
    };
    return (
        <Navbar collapseOnSelect expand="lg" className="navBar">
            <Container className='w-75'>
                <Navbar.Brand as={Link} href="/">
                    <img width={160} src="/images/logo.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto ">
                        <Nav.Link as={Link} href="/" className="text-white text-center linkz" >Home</Nav.Link>
                        <NavDropdown
                            show={showDropdown1}
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                            title={
                                <span className="text-white text-center linkz text-center">For Sale</span>
                            } id="basic-nav-dropdown" className='text-center'>
                            <NavDropdown.Item as={Link} href="/forSale/propertiesForSale">Property For Sale</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/forSale/apartmentsForSale">Apartments for Sale</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/forSale/studioApartments">Studio Apartments</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/forSale/villasForSaleInDubai">Villas for Sale in Dubai</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/forSale/townHouses">Townhouses for Sale in Dubai</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/forSale/penthousesForSaleInDubai">Penthouses for Sale in Dubai</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/forSale/officesForSaleInDubai">Offices for Sale in Dubai</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/forSale/warehouseForSaleInDubai">Warehouse for Sale in Dubai</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/forSale/duplexForSaleInDubai">Duplex for Sale in Dubai</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            show={showDropdown2}
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                            title={
                                <span className="text-white text-center linkz text-center">For Rent</span>
                            } id="basic-nav-dropdown" className='text-center'>
                            <NavDropdown.Item as={Link} href="/forRent/propertyForRent">Property for rent in Dubai</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/forRent/apartmentForRent">Apartments For rent in Dubai</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/forRent/studioApartmentForRent">Studio Apartments for rent in Dubai</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/forRent/townhousesForRent">Townhouses for rent in Dubai</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/forRent/penthousesForRent">Penthouses For rent In Dubai</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/forRent/officesForRent">Offices for rent in Dubai</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            show={showDropdown3}
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                            title={
                                <span className="text-white text-center linkz text-center">Services</span>
                            } id="basic-nav-dropdown" className='text-center'>
                            <NavDropdown.Item as={Link} href="/services/propertyManagement">Property Management</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/services/dubaiAreaGuides">Dubai Area Guides</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} href="/about" className="text-white text-center linkz">About Us</Nav.Link>
                        <Nav.Link as={Link} href="/contact" className="text-white text-center linkz">Contact Us</Nav.Link>
                        <Nav.Link as={Link} href="/blog" className="text-white text-center linkz">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
