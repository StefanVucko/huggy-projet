import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Recherche extends Component {
    render() {
        return (  
            <div className='container'>
            <InputGroup className="mb-5 shadow" style={{background:'#3E3E3E',borderRadius:'0.5em'}}>
                <FormControl className="m-2" style={{background:'#3E3E3E', border:'none', fontSize:'20px', color:'#9B9B9B'}}
                placeholder="Recherchez tous les bons plans"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <Link to="/Resultat" className="nav-link">
                <Button variant="outline-secondary" style={{border:'none', fontSize:'20px', color:'#9B9B9B'}}> <svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg></Button>
                </Link>
                </InputGroup.Append>
            </InputGroup>
            </div>
        )
    }
}

export default Recherche ;
