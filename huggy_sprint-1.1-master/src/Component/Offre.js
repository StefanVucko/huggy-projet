import React, { Component } from 'react'

class Offre extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.nom}</h3>
                <h5>{this.props.accroche}</h5>
                <p>{this.props.description}</p>
        
                <br/>
            </div>
        )
    }
}

export default Offre;