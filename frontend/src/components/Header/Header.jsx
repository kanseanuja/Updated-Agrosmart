import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import "./Header.css";
import { logout } from "./../../actions/userActions";

const Header = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    };

    useEffect(() => {
        // Load Google Translate script dynamically
        const addScript = document.createElement("script");
        addScript.src = "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
        addScript.async = true;
        document.body.appendChild(addScript);

        // Define the callback function
        window.loadGoogleTranslate = () => {
            new window.google.translate.TranslateElement(
                { pageLanguage: "en", includedLanguages: "hi,kn,ta,te,mr,bn,gu,pa,ur" }, 
                "google_translate_element"
            );
        };
    }, []);

    return (
        <Navbar collapseOnSelect expand="lg" fixed="top">
            <LinkContainer to="/">
                <Navbar.Brand className="nav-cal">
                    <Image width="80px" src="/Logo.png" />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link className="nav-cal">HOME</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/farmer">
                        <Nav.Link className="nav-cal">FARMER</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/consumer">
                        <Nav.Link className="nav-cal">CONSUMER</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="login?redirect=supplier">
                        <Nav.Link className="nav-cal">SUPPLIER</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/ourservices">
                        <Nav.Link className="nav-cal">WEATHER</Nav.Link>
                    </LinkContainer>

                    {/* Google Translate Dropdown */}
                    <div id="google_translate_element" style={{ padding: "10px" }}></div>

                    <LinkContainer to="/cart">
                        <Nav.Link className={`${userInfo ? "remove-space" : "add-space cart nav-cal"}`}>
                            <i className="fas fa-shopping-cart"></i> CART
                        </Nav.Link>
                    </LinkContainer>

                    {userInfo ? (
                        <NavDropdown title={userInfo?.name?.toUpperCase() || "Guest"} id="username">
                            {userInfo.isAdmin && (
                                <LinkContainer to="/admin/dashboard">
                                    <NavDropdown.Item>DASHBOARD</NavDropdown.Item>
                                </LinkContainer>
                            )}
                            <LinkContainer to="/profile">
                                <NavDropdown.Item>PROFILE</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <NavDropdown.Item onClick={logoutHandler}>LOGOUT</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    ) : (
                        <LinkContainer to="/login">
                            <Nav.Link className="login nav-cal">SIGN IN</Nav.Link>
                        </LinkContainer>
                    )}

                    {userInfo && userInfo.isAdmin && (
                        <NavDropdown title="ADMIN" id="adminmenu">
                            <LinkContainer to="/admin/userlist">
                                <NavDropdown.Item>USERS</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/admin/productlist">
                                <NavDropdown.Item>PRODUCTS</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/admin/orderlist">
                                <NavDropdown.Item>ORDERS</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
