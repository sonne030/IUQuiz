import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import Home from './Home';
import Spiel from './Spiel';
import Profil from './Profil';
import MeineDecks from './MeineDecks';
import { Switch } from '@mui/material';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                <div className="d-flex justify-content-center">
                   <Navbar style={{ backgroundColor: 'orange', display: 'flex', justifyContent: 'center', alignItems: 
                            'center'}}
                            variant={"light"} 
                            text="dark" expand="lg"> 
                                <Navbar.Brand href="#">IU Quiz</Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                      className="mr-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                               >
                                        <Nav.Link as={Link} to="/home">Startseite</Nav.Link>
                                        <Nav.Link as={Link} to="/meinedecks">Meine Kartendecks</Nav.Link>
                                        <Nav.Link as={Link} to="/spiel">Neues Spiel</Nav.Link>
                                        <Nav.Link as={Link} to="/profil">Benutzerprofil</Nav.Link>

                                    </Nav>

                            </Navbar.Collapse>
                       </Navbar>
                    </div>
                </div>
                <div>
                    <Switch>
                        <Route path="/profil">
                            <Profil />
                         </Route>
                        <Route path="/meinedecks">
                            <MeineDecks />
                        </Route>
                        <Route path="/spiel">
                            <Spiel />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}