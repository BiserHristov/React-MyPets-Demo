import React from 'react'

const url = 'http://localhost:5000/pets';
export const getAll = (category = '') => {
    
    let petsURL = url + ((category && category !== 'All') ? `?category=${category}` : '')
    
    return fetch(petsURL)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const getOne = (petId) => {

    let detailsURL = url + `/${petId}`;

    return fetch(detailsURL)
        .then(res => res.json())
        .catch(error => console.log(error))
}
