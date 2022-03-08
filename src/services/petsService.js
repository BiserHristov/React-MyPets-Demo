import React from 'react'

const url = 'http://localhost:5000/pets';
export const getAll = (category = '') => {

    let petsURL = url + ((category && category !== 'All') ? `?category=${category}` : '')

    return fetch(petsURL)
        .then(res => res.json())
        .catch(error => console.log(error))
};

export const getOne = (petId) => {

    let detailsURL = url + `/${petId}`;

    return fetch(detailsURL)
        .then(res => res.json())
        .catch(error => console.log(error))
};

export const create = (name, description, imageURL, category) => {

    let pet = {
        name: name,
        description: description,
        imageURL: imageURL,
        category: category,
        likes: 0
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    })
};

export const update = (petId, description) => {
    let pet = {
        id: petId,
        description: description
    }

    return fetch(url + `/${petId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    })
}

export const updateCounter = (petId, incrementedLikes) => {

    let pet = {
        id: petId,
        likes: incrementedLikes
    }
  

    return fetch(url + `/${petId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    })
        .then(res => res.json())
}
