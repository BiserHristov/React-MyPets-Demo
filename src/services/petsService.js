import React from 'react'

export const getAll = (category = '') => {
    let url = 'http://localhost:5000/pets';
    url += (category && category !== 'All') ? `?category=${category}` : ''

    return fetch(url)
        .then(res => res.json())
        .catch(error => console.log(error))
}
