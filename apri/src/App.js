import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Nav,
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,

} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


import Home from './Home'
import About from  './About'
import Contact from './Contact'
import Offer from './Offer'






const BasicExample = () => (

    <Router>

        <div className="container-fluid ">
            <div className="contakt-nav"><div className="sicial-nav">
                <p><img src="/mobile-phone.png" className="icon" alt=""/> 502 614 262 <img src="/mail.png" alt="" className="icon"/>  przyklad@email.pl</p></div></div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img src="/LOGO.jpg" className="welcome-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer to="/">
                            <NavItem>Strona główna</NavItem>
                        </LinkContainer>

                        <NavDropdown eventKey={3}title="Oferta" id="basic-nav-dropdown">
                            <LinkContainer to="/oferta">
                                <MenuItem eventKey={3.1}>Agencja Celna</MenuItem>
                            </LinkContainer>
                            <MenuItem eventKey={3.2}>Import</MenuItem>
                            <MenuItem eventKey={3.3}>Rozwiązania IT</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                        <LinkContainer to="/about">
                            <NavItem>O nas</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <NavItem>Kontakt</NavItem>
                        </LinkContainer>
                    </Nav>
                    {/*<Nav pullRight>*/}
                    {/*<NavItem eventKey={1} href="#">Link Right</NavItem>*/}
                    {/*<NavItem eventKey={2} href="#">Link Right</NavItem>*/}
                    {/*</Nav>*/}
                </Navbar.Collapse>
            </Navbar>



            {/*<hr/>*/}

            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/oferta" component={Offer}/>
        </div>
    </Router>
)
export default BasicExample

