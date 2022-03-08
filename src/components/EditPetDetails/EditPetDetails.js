import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import * as petService from '../../services/petsService'
import InputError from "../Shared/InputError/InputError";


const EditPetDetails = () => {
    let { petId } = useParams();
    let [pet, setPet] = useState({});
    let [errorMessage, setErrorMessage] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        petService.getOne(petId)
            .then(res => setPet(res))
    }, [petId])

    const onDescriptionSaveSubmit = (e) => {
        e.preventDefault();
        petService.update(pet.id, e.target.description.value)
            .then(res => navigate(`/pets/${petId}/details`))
    }

    const onDescriptionChangeHandler = (e) => {
        //e.preventDefault();

        if (e.target.value.length < 10) {
            setErrorMessage('Description should be at least 10 characters long.')
        } else {
            setErrorMessage('')
        }
    }

    return (
        <section className="detailsMyPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i>{pet.likes}</p>
            <p className="img"><img src={pet.imageURL} />
            </p>
            <form onSubmit={onDescriptionSaveSubmit}>
                <textarea type="text" name="description" onBlur={onDescriptionChangeHandler} defaultValue={pet.description}></textarea>
                <InputError>{errorMessage}</InputError>
                <button className="button"> Save</button>
            </form>
        </section>
    )
}

export default EditPetDetails