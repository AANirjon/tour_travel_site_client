import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar bg="dark" fixed="top" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <b>
                            <span className="text-warning">Tour&nbsp;</span>
                            <span className="text-primary">Holiday</span>
                        </b>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={Link} active to="/packages">
                                Packages
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                About Us
                            </Nav.Link>
                            <Nav.Link as={Link} to="/blogs">
                                Tour Tips
                            </Nav.Link>

                            {/* Private route and condition When login */}
                            {user?.email ? (
                                <>
                                    {/* <Nav.Link as={Link}>My Orders</Nav.Link>*/}
                                    <Nav.Link as={Link} to="/manageOrders">
                                        Manage Orders
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/addNewpack">
                                        Add New Plan
                                    </Nav.Link>

                                    <Nav.Link>
                                        <button
                                            onClick={logOut}
                                            className="btn btn-sm btn-outline-danger"
                                        >
                                            Log Out
                                        </button>
                                    </Nav.Link>

                                    <Nav.Link>
                                        <img
                                            height="50"
                                            className="rounded-circle"
                                            width="50"
                                            src={user?.photoURL}
                                            alt="User_photo"
                                        />
                                    </Nav.Link>
                                </>
                            ) : (
                                <Nav.Link as={Link} to="/login">
                                    <button className="btn btn-sm btn-success">
                                        Sign In
                                    </button>
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
