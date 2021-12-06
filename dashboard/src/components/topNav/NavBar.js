import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">DeCamping</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="#features">Productos</Nav.Link>
                    <Nav.Link href="#pricing">Usuarios</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
  }


export default NavBar



