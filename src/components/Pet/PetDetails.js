import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as petService from '../../services/petsService'
const PetDetails = () => {

    const { petId } = useParams();
    let [pet, setPet] = useState({}); 
    
    useEffect(() => {
        petService.getOne(petId)
            .then(res => setPet(res))
    }, [petId])

    return (

        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} <a href="#"><button className="button"><i className="fas fa-heart"></i>
                Pet</button></a>
            </p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
        </section>
    )
}

export default PetDetails