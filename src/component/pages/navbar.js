import React from "react";
import { Navbar,Nav,NavDropdown } from "react-bootstrap";


function Navigation(props)
{

    const navbarStyle = {
        display: "flex",
        listStyle: "none",
        padding: "20px",
        backgroundColor: "#000",
    };

    const linkStyle = {
        textDecoration: "none",
        color: "#fff",
        fontWeight: 'bold',
    };
   

    return(    
        <Navbar style={navbarStyle}>
            <Navbar.Brand href="/" style={linkStyle}>AKSHAY</Navbar.Brand>
            <Nav className="nav">
                <Nav.Item><Nav.Link href="/" style={linkStyle}>Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/counter" style={linkStyle}>Counter</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/forms" style={linkStyle}>Forms</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/todo" style={linkStyle}>To-Do List</Nav.Link></Nav.Item>
                <NavDropdown title={<span style={{ color: '#fff',fontWeight: 'bold' }} >Contact</span>} id="dropdown">
                    <NavDropdown.Item href="/">Location</NavDropdown.Item>
                    <NavDropdown.Item href="mailto:akshay10sg@gmail.com">Mail</NavDropdown.Item>
                    <NavDropdown.Item href="/">Location</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
}

export default Navigation;