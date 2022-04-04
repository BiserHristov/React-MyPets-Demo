import React from 'react'
import { Link } from 'react-router-dom'
import { updateCounter } from '../../services/petsService'

const PetCard = ({ pet, increaseLikes }) => {
    console.log(`${typeof (pet.likes)} -----> ${pet.likes}`)
    return (
        <li className="otherPet">
            <h3>Name: {pet.name}</h3>
            <p>Category: {pet.category}</p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                <button className="button" onClick={increaseLikes}><i className="fas fa-heart"></i> Pet</button>
                <Link to={`/pets/${pet.id}/details`}><button className="button">Details</button></Link>
                <i className="fas fa-heart"></i> <span>{pet.likes}</span>
            </div>
        </li>
    )
}

export default PetCard