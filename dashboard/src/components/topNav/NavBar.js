import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">DeCamping</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Dashboard</Nav.Link>
                    <Nav.Link href="/products">Productos</Nav.Link>
                    <Nav.Link href="/users">Usuarios</Nav.Link>
                    <Nav.Link href="/category">Categorías</Nav.Link>
                    <Nav.Link href="/orders">Orders</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
  }


export default NavBar



