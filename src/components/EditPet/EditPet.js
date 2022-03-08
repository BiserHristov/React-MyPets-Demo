import { Component } from "react";
import PetFormView from "../PetFormView/PetFormView"
import * as petService from '../../services/petsService'
import { useParams } from "react-router-dom";
import withRouter from '../withRouter'

class EditPet extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            imageURL: '',
            likes: 0
        }

        this.onEditSubmitHandler = this.onEditSubmitHandler.bind(this)
    }
    componentDidMount() {
        let { petId } = this.props.params;

        petService.getOne(petId)
            .then(pet => { this.setState(pet) })
    }

    onEditSubmitHandler = (e) => {
        console.log(e);
    }

    render() {

        return <PetFormView
            onSubmitHandler={this.onEditSubmitHandler}
            petName={this.state.name}
            setPetName={(name) => this.setState({ name })}
        />

    }
}

export default withRouter(EditPet)