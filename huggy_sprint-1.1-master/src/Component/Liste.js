import React, { Component, Fragment } from 'react'
import Offre from './Offre'

class Liste extends Component {

    state = {
        offres : [
            {
                id: 1,
                nom: 'Offre A exceptionnel',
                accroche:'Mon Accroche',
                description:'Notre enceinte connectée la plus populaire : maintenant disponible avec un affichage Led pour consulter l\'heure, la température extérierure ou les minuteurs. Idéal pour votre table de nuit : demandez à Alexa de programmer une alarme et touchez la surface supérieur pour la reporter', 
            },
            {
                id: 2,
                nom: 'Offre B chez AZERTY',
                accroche:'Ma phrase d\'accroche/wiki/S ',
                description:'Contrôlez votre maison connectée par la voix : allumez les lumières, réglez les thermostats et plus encore avec des appareils connectées compatibles.', 
            }
        ]

    }

    render() {
        return(
            <Fragment>
                {this.state.offres.map(offre => (
                    <Offre
                    key={offre.id}
                    nom={offre.nom}
                    accroche={offre.accroche}
                    description={offre.description} 
                    />
                ))}
            </Fragment>
        );
    }
}

export default Liste;