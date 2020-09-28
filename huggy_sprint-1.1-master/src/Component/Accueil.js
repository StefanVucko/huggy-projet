import React, { Component, Fragment } from 'react';
import Value1 from './images/Value1.png';
import Value2 from './images/Value2.png'
import Value3 from './images/Value3.png'
import Sidebar from './Sidebar'
import Recherche from './Recherche';





class Accueil extends Component {
    render() {
    return (
        <Fragment>
        <div class="text-white" style={{background:'#1B1B1B', height:'100vh'}}>
            <div style={{zIndex:-20}}>
            <Sidebar />
            </div>
        <div class="text-center">
            <div class="h1 p-5" style={{fontFamily:'Brush Script MT, Brush Script Std, cursive', fontSize:'75px'}}>Huggy</div>

            {/* ici la barre de recherche */}
            <div className="d-flex justify-content-center">
            <Recherche />
            
            </div>
        
            <div class="h3 mt-3">Fatigués d'être ...... ? On peut vous aider.</div>
            <div class="d-flex justify-content-center mt-5">
            <p class="mr-2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" color="#0095FC">
            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg> Value 1</p>
                
                <p class="mr-2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" color="#0095FC">
            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg> Value 2</p>

                <p class="mr-2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" color="#0095FC">
            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg> Value 3</p>
            </div>
            <p class="h5 mt-5">Subtitle 1 Lorem ipsum value proposition</p>


            <div class="d-flex justify-content-center">
            <div class="card-deck mt-5 ">
                <div class="card" style={{borderRadius:'2em',background:'#292929'}}>
                    <div class="card-body">
                    <img src={Value1} class="card-img-top" alt="..."/>
                     <h5 class="card-title text-white">Card title</h5>
                </div>
             </div>
                
                <div class="card" style={{borderRadius:'2em',background:'#292929'}}>
                    <div class="card-body">
                    <img src={Value2} class="card-img-top" alt="..." />
                    <h5 class="card-title text-white">Card title</h5>
                    </div>
                </div>

                <div class="card" style={{borderRadius:'2em',background:'#292929'}}>
                <div class="card-body">
                <img src={Value3} class="card-img-top" alt="card" />
                <h5 class="card-title text-white">Card title</h5>
                </div>
                </div>
            </div>
            </div>



        </div>
        </div>
        </Fragment>
    );
}
}
export default Accueil;
