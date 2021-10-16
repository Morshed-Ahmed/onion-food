import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import logo from '../../img/logo2.png'


const Header = () => {
    const { hendleLogout, user } = useFirebase();
    return (
        <div>

            <Navbar bg="light" variant="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img className="img-fluid header-logo  " src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className="text-black" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="text-black" as={Link} to="/payment">Payments</Nav.Link>
                            <Nav.Link className="text-black" as={Link} to="/shipping">Shipping</Nav.Link>


                        </Nav>
                        {<div className="d-flex text-black" >
                            <Nav.Link className="text-black" as={Link} to="/register">Register</Nav.Link>
                            {user?.email ? <Nav.Link className="text-black" onClick={hendleLogout} /* as={Link}

                                to="" */>LogOut</Nav.Link> : <Nav.Link className="text-black" as={Link} to="login">Login</Nav.Link>


                            }

                            <Nav.Link className="text-black me-5" as={Link} to="login">User:  {user.displayName}</Nav.Link>
                            {/*  <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />

                            <Button className="text-white" variant="outline-success">Search</Button> */}
                        </div>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;