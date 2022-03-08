import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import * as petService from '../../services/petsService'
const PetDetails = () => {

    const { petId } = useParams();
    let [pet, setPet] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        petService.getOne(petId)
            .then(res => setPet(res))
    }, [petId])

    const onPetButtonClickHandler = () => {
        console.log('updateCounterHandler');

        const incrementedLikes = pet.likes + 1
        petService.updateCounter(petId, incrementedLikes)
            .then(updatedPet => {
                setPet(updatedPet)
                // setPet(oldState => ({ ...oldState, likes: incrementedLikes }))
            })
    }
    return (

        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes}
                <button className="button" onClick={onPetButtonClickHandler}>
                    <i className="fas fa-heart"></i>
                    Pet
                </button>
            </p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                <Link to={`/pets/${pet.id}/edit`} ><button className="button">Edit</button></Link>
                <Link to="#"><button className="button">Delete</button></Link>

            </div>
        </section>
    )
}

export default PetDetails