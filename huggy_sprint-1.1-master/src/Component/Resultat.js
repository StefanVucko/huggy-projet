import React, { Component, Fragment } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import Liste from './Liste'
import Recherche from './Recherche';
import Sidebar from './Sidebar'

class Resultat extends Component {
    
    render() {
        return(
        // ici la barre de recherche
        <Fragment>
        <div className="px-5 pt-5 d-flex align-items" style={{background:'#1F1F1F'}}>
        <h1 className="titre" style={{fontFamily:'Brush Script MT, Brush Script Std, cursive',color:'white', fontSize:'50px'}}>Huggy</h1>
        <div className="ml-5 w-50"> 
        <Recherche />
        <Sidebar />
        </div>
        </div> 

        <div className="text-white" style={{background:'#292929', height:'100vh'}}>
        <br/><br/>
        <div className="container ">
        <Navbar style={{background:'#292929'}} variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="France" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Préférences" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="A tout moment" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link href="#link">Voir sur la carte</Nav.Link>
                </Nav>
        </Navbar.Collapse>
        </Navbar>
        <br/><br/><br/>
        <div className="mx-3 w-75">
            <Liste />
        </div>
        <div className="btn" style={{float:"right"}}>
        <Button style={{background:"#3E3E3E", border:'none', fontSize:'18px'}}><a style={{color:'grey'}} href='/'>Envoyez vos remarques</a></Button>
        </div>

        </div>
        </div>
        </Fragment>
        );
    }
}

export default Resultat;